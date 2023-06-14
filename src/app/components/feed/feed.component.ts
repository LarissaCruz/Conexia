import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/service/post/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: any;
  constructor(private router: Router, private postService: PostService) { }


  ngOnInit() {
    this.postService.listarAllPost().subscribe(
      (response) => {
        this.posts = response

      },
      (error) => {
       console.error("Erro ao obter os dados:", error);
        // Trate o erro de acordo com suas necessidades, exiba uma mensagem de erro ou tome outras ações necessárias.
      }
    );

  }
  navigation() {
    this.router.navigate(["./search"]);
  }
}

