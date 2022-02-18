import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-field-errors',
  templateUrl: './form-field-errors.component.html',
  styleUrls: ['./form-field-errors.component.scss']
})
export class FormFieldErrorsComponent implements OnInit {
  @Input('errors')
  errors: any = [];
  constructor() { }

  ngOnInit() {
  }

}
