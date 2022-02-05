import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';
const redirectTo = '/home';
const routes: Routes = [
  {
    path: '', redirectTo, pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainPageComponent
  },
  {
    path: 'create-message',
    component: MessageSenderComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
