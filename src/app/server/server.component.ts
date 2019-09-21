import { Component } from '@angular/core';

// Tell Angular that this is not just a simple TypeScript class, but a special one (a component)
// Configure the component for Angular (Pass Javascript object)
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
// Export the class, so that it can be used in other files
export class ServerComponent {

}