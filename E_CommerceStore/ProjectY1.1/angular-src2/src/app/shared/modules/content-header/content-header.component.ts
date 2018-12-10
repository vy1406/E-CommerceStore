import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
    @Input() heading: string;
    @Input() icon: string;
    @Input() firstLink: string;
    @Input() firstHeading: string;
    @Input() secondLink: string;
    @Input() secondHeading: string;
    @Input() current: string;

  constructor() { }

  ngOnInit() {
  }

}
