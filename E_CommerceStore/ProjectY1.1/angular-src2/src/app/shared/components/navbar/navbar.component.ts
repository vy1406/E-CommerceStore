import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService, SharedService} from '../../services';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    name: String;
    pushRightClass: string = 'push-right';

    constructor(
        private authService: AuthService,
        public router: Router,
        private flashMessage: FlashMessagesService,
        private sharedService: SharedService)
    {
        this.getUsersName();
        sharedService.changeEmitted$.subscribe(
            text => {
                this.getUsersName();
        });
            this.router.events.subscribe((val) => {
                if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                    this.toggleSidebar();
                }
        });
    }

    ngOnInit() { }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    onLogoutClick() {
        this.authService.logOut();
        this.getUsersName();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    }

    getUsersName() {
        this.name = this.authService.getUserName();

        return this.name;
    }
}
