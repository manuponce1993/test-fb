import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-firebase-auth';

    constructor(public authService: AuthServiceService) {

    }


}
