import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck, OnDestroy {

  shouldShowMessage: boolean = false;
  myItems = ['notebook', 'pen', 'dinozaur'];

  toggleMessage() {
    this.shouldShowMessage = !this.shouldShowMessage;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
