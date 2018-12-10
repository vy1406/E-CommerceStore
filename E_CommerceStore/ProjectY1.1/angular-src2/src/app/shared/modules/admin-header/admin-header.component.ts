import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
    @Input() heading: string;
    @Input() icon: string;
    @Input() thirdInput: string;
    @Input() thirdLink: string;
    @Input() isRemove: string;}
