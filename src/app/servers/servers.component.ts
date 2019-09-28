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
  serverName = '';

  constructor() { 
    // ES6 anonymous function syntax. Almost equivalent to function() {}
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit() {
  }

  onServerCreation() {
    this.serverCreationStatus = 'A server is created.';
  }

  onUpdateOfServerName(event: Event) {
    this.serverName = event.target.value;
  }

}
