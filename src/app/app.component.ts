import {Component, OnInit} from '@angular/core';
import {ContactsService} from './contacts.service';
import {EventBusService} from './event-bus-service';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ContactsService]
})
export class ContactsAppComponent implements OnInit {
  title$: Observable<string>;

  constructor(private eventBus: EventBusService) {}

  ngOnInit() {
   this.title$ = this.eventBus.observe('appTitleChange');
  }

}
