import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.referenceDataService.getReferenceData()
    // .pipe(first())
    // .subscribe(
    //   (data) => { },
    //   (err) => { 
    //     // TODO : show error
    //   }
    // );
  }

}
