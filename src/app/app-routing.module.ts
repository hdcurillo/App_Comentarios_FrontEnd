import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCommentComponent } from './components/add-edit-comment/add-edit-comment.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { VerCommentsComponent } from './components/ver-comments/ver-comments.component';

const routes: Routes = [
  {path:'', component: ListCommentsComponent},
  {path:'agregar', component: AddEditCommentComponent},
  {path:'editar/:id', component: AddEditCommentComponent},
  {path:'ver/:id', component: VerCommentsComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
