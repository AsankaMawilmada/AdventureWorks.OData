import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[submit-button]',
  templateUrl: './submit-button.directive.html',
  styleUrls: ['./submit-button.directive.scss']
})
export class SubmitButtonDirective implements OnInit {
  @Input('busy')
  busy: boolean = false;

  @Input('button-text')
  buttonText: string = '';
  constructor() { }

  ngOnInit() {
  }

}
