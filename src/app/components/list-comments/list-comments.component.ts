import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarService } from 'src/app/services/comentar.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {

  listComentarios: Comentario[] = [];
  
  constructor(private _comentarioService: ComentarService) { }

  ngOnInit(): void {
    this.getComentarios()
  }

  getComentarios() {
    this._comentarioService.getListComentarios().subscribe(data => {
      console.log(data);
      this.listComentarios = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarComentario(id: any) {
    this._comentarioService.deleteComentario(id).subscribe(data => {
      this.getComentarios();
    }, error => {
      console.log(error)
    })
  }

}
