import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { AuthService } from '../../../shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [routerTransition()]
})
export class ProfileComponent implements OnInit {
    user: Object;
    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
            this.user = profile.user;
        },
        err => {
            console.log(err);
            return false;
        });
}

}
