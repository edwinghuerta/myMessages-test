import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    public router: Router
  ) { }

  icon = faCommentAlt;

  ngOnInit(): void {
  }

  redirect(){
    if (this.router.url === '/home') {
      this.router.navigateByUrl('/create-message');
    } else if(this.router.url === '/create-message') {
      this.router.navigateByUrl('/home'); 
    }
  }
}
