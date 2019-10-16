import { Component } from '@angular/core';

// Tell Angular that this is not just a simple TypeScript class, but a special one (a component)
// Configure the component for Angular (Pass Javascript object)
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html', 
    styles: [` 
        .online { color: white; } 
    `]
})
// Export the class, so that it can be used in other files
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus == 'online' ? 'green' : 'red';
    }
}