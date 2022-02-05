import { Component, OnInit } from '@angular/core';
import { MessagesService } from './../../core/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.scss']
})
export class MessageSenderComponent implements OnInit {

  constructor(
    private messagesService : MessagesService,
    public router: Router
  ) { }

  btnConfig = {
    styles: {
      display: 'block',
      margin: '0 auto',
      marginTop: '20px',
      backgroundColor: '#934A5F',
      cursor: 'pointer'
    }
  };

  author: string = "";

  message: string = "";

  disableButton: boolean = false;

  ngOnInit(): void {
  }

  sendData(){
    if(!this.disableButton){
      if(this.author.length > 0 && this.message.length > 0){
        this.disableButton = true;
        this.btnConfig = {
          styles: {
            display: 'block',
            margin: '0 auto',
            marginTop: '20px',
            backgroundColor: '#b0b0b0',
            cursor: 'no-drop'
          }
        }
        this.messagesService.postMessage(this.author, this.message).subscribe((data) =>{
          if (data) { 
            this.disableButton = false;
            this.router.navigateByUrl('/home'); 
          }
        });
      }
    }
  }

}
