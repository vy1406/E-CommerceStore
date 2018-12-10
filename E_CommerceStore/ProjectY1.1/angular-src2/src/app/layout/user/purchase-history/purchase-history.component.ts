import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Product, History } from '../../../shared';
import { AuthService } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss'],
  animations: [routerTransition()]
})
export class PurchaseHistoryComponent implements OnInit {
    searchField: string;
    history: History[]=[];

    column: string;
    isDesc: boolean = false;
    direction: number;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.getHistory().subscribe(data => {
            //console.log(data);
            if (data.success)
            {
                this.history = data.answer;
            }
            else {
                console.log(data.err);
            }

        });
    }

    sort(property) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    }
}
