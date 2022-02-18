import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[table-shimmer]',
  templateUrl: './table-shimmer.directive.html',
  styleUrls: ['./table-shimmer.directive.scss']
})
export class TableShimmerDirective {
  @Input('busy')
  busy: boolean = false;
  
  @Input('rows')
  numberOfRows: number = 0;
  
  @Input('cols')
  numberOfColumns: number = 0;
  constructor() { }

  createRange(number: number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }
}
