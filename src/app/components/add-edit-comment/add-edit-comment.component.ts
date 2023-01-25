import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarService } from 'src/app/services/comentar.service';

@Component({
  selector: 'app-add-edit-comment',
  templateUrl: './add-edit-comment.component.html',
  styleUrls: ['./add-edit-comment.component.css']
})
export class AddEditCommentComponent implements OnInit {

  addComentario: FormGroup;
  accion = 'Agregar';
  id=0;
  comentario: Comentario | undefined;

  constructor(private fb: FormBuilder, private _comentarioService: ComentarService,
              private router: Router, private aRoute: ActivatedRoute) {
    this.addComentario = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      texto: ['', Validators.required],
    })
    this.id = +this.aRoute.snapshot.paramMap.get('id')!
  }

  ngOnInit(): void {
    this.esEditar()
  }

  esEditar() {
    if(this.id !== 0) {
      this.accion = 'Editar';

      this._comentarioService.getComentario(this.id).subscribe(data => {
        console.log(data);
        
        this.comentario = data
        this.addComentario.patchValue({
          titulo: data.titulo,
          texto: data.texto,
          autor: data.autor,
        })
      }, error => {
        console.log(error)
      })
    }
  }

  agregarEditarComentario() {

    if(this.comentario == undefined){
      //TODO: Agregamos un nuevo comentario
      const comentario: Comentario ={
        titulo: this.addComentario.get('titulo')?.value,
        autor: this.addComentario.get('autor')?.value,
        texto: this.addComentario.get('texto')?.value,
        fechaCreate: new Date()
      }
      this._comentarioService.saveComentario(comentario).subscribe(data => {
        this.router.navigate(['/'])
      }, error => {
        console.log(error)
      })
    }else {
      //FIXME: Editamos el comentario
      const comentario: Comentario ={
        id: this.comentario.id,
        titulo: this.addComentario.get('titulo')?.value,
        autor: this.addComentario.get('autor')?.value,
        texto: this.addComentario.get('texto')?.value,
        fechaCreate: this.comentario.fechaCreate
      }

      this._comentarioService.updateComentario(this.id, comentario).subscribe(data => {
        this.router.navigate(['/'])
      }, error => {
        console.log(error)
      })
    }

  }
}
