/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CadastroServiceService } from './cadastro-service.service';

describe('Service: CadastroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastroServiceService]
    });
  });

  it('should ...', inject([CadastroServiceService], (service: CadastroServiceService) => {
    expect(service).toBeTruthy();
  }));
});
