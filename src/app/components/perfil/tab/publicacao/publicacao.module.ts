import { PublicacaoComponent } from './publicacao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/components/shared/card/card.module';
import { PostModule } from 'src/app/components/shared/post/post.module';


@NgModule({
  imports: [
    CommonModule,
    CardModule,
    PostModule
  ],
  declarations: [PublicacaoComponent],
  exports: [
    PublicacaoComponent
  ]
})
export class PublicacaoModule { }
