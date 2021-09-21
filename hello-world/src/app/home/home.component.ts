import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { CardSize } from '../models/card.model';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck, OnDestroy {

  shouldShowMessage: boolean = false;
  myItems = ['notebook', 'pen', 'dinozaur'];
  CardSize = CardSize;
  cardActive = true;
  currentDate = new Date();
  debugObject = { name: 'fiat', model: 'albea'};

  constructor(private userService: UserService) {
  }

  toggleMessage() {
    this.shouldShowMessage = !this.shouldShowMessage;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.userService.setActiveUser("admin-123");
  }

  handleCardClose(event: boolean) {
    console.log('closed', event);
    this.cardActive = !event;
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
