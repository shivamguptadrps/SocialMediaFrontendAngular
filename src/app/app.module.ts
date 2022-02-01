import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponent/todos/todos.component';
import { TodoItemComponent } from './Mycomponent/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LeftComponentComponent } from './Mycomponent/left-component/left-component.component';
import { LoginComponent } from './Mycomponent/login/login.component';
import { Route, RouterModule } from '@angular/router';
import { SigninComponent } from './Mycomponent/signin/signin.component';
import { SignupComponent } from './Mycomponent/signup/signup.component';
import { RightComponentComponent } from './Mycomponent/right-component/right-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './Mycomponent/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    LeftComponentComponent,
    LoginComponent,
    SigninComponent,
    SignupComponent,
    RightComponentComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([ 
      {
        path:'signin',component:SigninComponent
      },
      {
        path:'signup',component:SignupComponent
      },
      {
        path:'',component:LoginComponent
      }
      ,
      {
        path:'home',component:TodosComponent   
      }
      // ,
      // {
      //   path:'dotweet',component:AddtodoComponent
      // }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
