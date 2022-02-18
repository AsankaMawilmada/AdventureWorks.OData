import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[spinner]',
  templateUrl: './spinner.directive.html',
  styleUrls: ['./spinner.directive.scss']
})
export class SpinnerDirective implements OnInit {
  @Input('busy')
  busy: boolean = false;

  @Input('small')
  small: boolean = false;

  @Input('text')
  text: string = '';

  constructor() { }

  ngOnInit() {
  }
}
