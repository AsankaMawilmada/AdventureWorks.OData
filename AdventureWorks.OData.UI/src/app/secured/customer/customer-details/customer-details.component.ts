import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.sass']
})
export class CustomerDetailsComponent implements OnInit {
  title?: string;
  rowGuid?: string;
  constructor() { }

  ngOnInit() {
  }

}
