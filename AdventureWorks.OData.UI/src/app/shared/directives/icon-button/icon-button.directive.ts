import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[icon-button]',
  templateUrl: './icon-button.directive.html',
  styleUrls: ['./icon-button.directive.scss']
})
export class IconButtonDirective implements OnInit {
  @Input('busy')
  busy: boolean = false;

  @Input('icon-css-class')
  iconCssClass: string = '';
  constructor() { }

  ngOnInit() {
  }

}
