import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server is created.';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() { 
    // ES6 anonymous function syntax. Almost equivalent to function() {}
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit() {
  }

  onServerCreation() {
    this.serverCreated = true;
    this.serverCreationStatus = 'A server is created with name: ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateOfServerName(event: Event) {
    // Typecasting in Typescript, to inform that the event.target is of type HTMLInputElement
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
