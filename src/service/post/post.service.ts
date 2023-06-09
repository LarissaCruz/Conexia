import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, forkJoin, from, of, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  create(texto: string, id: number, imageSrc: any): void {
    const params = { texto, id, imageSrc };

    this.http.post<any>(`${this.apiUrl}/publicacoes`, { params, responseType: 'text' }).subscribe(
      (response) => {
        console.log("Publicação inserida:", response);
      },
      (error) => {
        console.error("Erro ao registrar Publicação:", error);
      }
    );
  }



  listarAllPost(): Observable<any> {
    return new Observable<any>((observer) => {
      this.http.get<any>(`${this.apiUrl}/publicacoes`).pipe(
        concatMap((response) => {
          const publicacoes = response.data;

          const observables = publicacoes.map((publicacao: any) => {
            if (publicacao.imagem && publicacao.imagem.data) {
              const arrayBuffer = new Uint8Array(publicacao.imagem.data).buffer;
              const blob = new Blob([arrayBuffer]);

              return fetch(URL.createObjectURL(blob))
                .then((response) => response.blob())
                .then((blob) => {
                  return new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      const base64Image = reader.result as string;
                      const mimeType = blob.type;
                      const dataUrl = `data:${mimeType};base64,${base64Image}`;
                      resolve(dataUrl);
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                  });
                })
                .then((base64ImageUrl) => {
                  publicacao.imagemUrl = base64ImageUrl;
                  return publicacao;
                });
            } else {
              return of(publicacao);
            }
          });

          return forkJoin(observables);
        }),
        toArray()
      ).subscribe(
        (publicacoesConvertidas: any[]) => {
          observer.next(publicacoesConvertidas);
          observer.complete();
        },
        (error: any) => {
          observer.error(error);
          observer.complete();
        }
      );
    });
  }

}
