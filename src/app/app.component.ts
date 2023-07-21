import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers:any=[];
  Addserver(){
    this.servers.push("another server ");

  }
  removeServer(){
    this.servers.pop();
  }
}
