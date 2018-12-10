import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Product, History, HistoryItem } from '../../../shared';
import { AuthService } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss'],
  animations: [routerTransition()]
})
export class HistoryItemComponent implements OnInit {
    historyItem: HistoryItem = new HistoryItem();
    id: string;

    constructor(private authService: AuthService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });

        this.authService.getHistoryItem(this.id).subscribe(data => {
            if (data.success)
                this.historyItem = data.answer;
            else
                console.log(data.msg);
        })
    }

}
