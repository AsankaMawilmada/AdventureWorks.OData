import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  form: FormGroup;
  //currentUser: ICurrentUser | undefined;
  search: string = '';
  //suggestions$!: Observable<ICandidate[]>;
  constructor(public fb: FormBuilder,  private router: Router) { 
    this.form = this.initForm();
  }

  ngOnInit() {
    //this.currentUser = this.authenticationService.getCurrentUser();   
    //this.initCandidateLookup();
  }

  initForm() {
    return this.fb.group({
      searchTerm: [''],
    });
  }

  // initCandidateLookup(){
  //   this.suggestions$ = Observable.create((observer: any) => {
  //     this.candidateService.getLookup(this.form.value.searchTerm)
  //       .pipe(first())
  //       .subscribe((data: any) => {
  //         observer.next(data);
  //       });
  //   });
  // }

  // public onCandidateSelect(e: any): void {    
  //     this.router.navigate(['/candidates/edit/',  e.item.candidateId]);    
  // }
}
