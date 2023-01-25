import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarService } from 'src/app/services/comentar.service';

@Component({
  selector: 'app-ver-comments',
  templateUrl: './ver-comments.component.html',
  styleUrls: ['./ver-comments.component.css']
})
export class VerCommentsComponent implements OnInit {

  id:number;
  comentario: Comentario | undefined;

  constructor(private aRoute: ActivatedRoute, private _comentarioService: ComentarService) { 
    //console.log(this.aRoute.snapshot.paramMap.get('id'));
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getComentario()
  }

  getComentario() {
    this._comentarioService.getComentario(this.id).subscribe(data => {
      this.comentario = data;
    })
  }

}
