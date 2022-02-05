import { Component, OnInit } from '@angular/core';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons'
import { MessagesService } from './../../core/services/messages.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})


export class MainPageComponent implements OnInit {

  commentIcon = faCommentAlt;

  messages: any[]= [];
  filterByNew: boolean = true;
  buttonName: string = 'Filtrar por más antiguo';
  btnConfig = {
    styles: {
      marginBottom: '20px',
      width: '200px'
    }
  };

  constructor(
    private messagesService : MessagesService
  ) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(){
    this.messagesService.getMessages().subscribe((data =>{
      this.messages = data;
    }))
  }

  filterToggle(){
    this.filterByNew = !this.filterByNew;
    if(this.filterByNew){
      this.buttonName = 'Filtrar por más antiguo';
    }else{
      this.buttonName = 'Filtrar por más nuevo';
    }
  }
}
