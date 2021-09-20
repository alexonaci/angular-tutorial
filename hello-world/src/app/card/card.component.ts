import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges, OnInit {


  private _variant: string = '';

  public get variant(): string {
    return this._variant;
  }

  @Input() set variant(value: string) {
    this._variant = value;
    // .. do http get and update something else
  }


  @Output() closeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  user = '';

  constructor(private userService: UserService) {}

  ngOnChanges(changes: SimpleChanges) {
    if(changes.variant.currentValue) {
      // do stuff
    }
  }

  ngOnInit() {
    this.user = this.userService.activeUser;
  }

  handleClose() {
    this.closeEmitter.emit(true);
  }
}
