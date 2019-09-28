import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() { 
    // ES6 anonymous function syntax. Almost equivalent to function() {}
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit() {
  }

}
