import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-admin-tools',
    templateUrl: './admin-tools.component.html',
    styleUrls: ['./admin-tools.component.scss'],
    animations: [routerTransition()]
})
export class AdminToolsComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

}
