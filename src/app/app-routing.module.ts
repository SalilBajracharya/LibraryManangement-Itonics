import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : '', redirectTo: '/login', pathMatch: 'full'},
  { path : 'login', component: LoginComponent},
  { path : 'books', component: BookListComponent},
  { path : 'student', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BookListComponent, StudentComponent, LoginComponent]
