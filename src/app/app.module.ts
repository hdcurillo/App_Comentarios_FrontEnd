import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//FIXME: Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditCommentComponent } from './components/add-edit-comment/add-edit-comment.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { VerCommentsComponent } from './components/ver-comments/ver-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEditCommentComponent,
    ListCommentsComponent,
    VerCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
