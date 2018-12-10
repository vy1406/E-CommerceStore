import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { AuthService, SharedService } from '../../../shared';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    email: String;
    password: String;

    constructor(
        public router: Router,
        private authService: AuthService,
        private flashMessage: FlashMessagesService,
        private sharedService: SharedService
        ) {
    }

    ngOnInit() {
    }

    onLoginSubmit() {
        const user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(data => {
            if (data.success) {
                console.log("gut");
                this.authService.storeUserData(data.token, data.user);
                this.sharedService.emitChange('login emitted');
                this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 3000 });
                this.router.navigate(['/dashboard']);
            }
            else {
                console.log(data.msg);
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                this.router.navigate(['/login']);
            }
        });
    }

}
