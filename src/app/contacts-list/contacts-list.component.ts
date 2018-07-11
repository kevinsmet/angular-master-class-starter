import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../contacts.service';
import {Observable} from 'rxjs/internal/Observable';
import {Contact} from '../models/contact';
import {Subject} from 'rxjs/internal/Subject';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {EventBusService} from '../event-bus-service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html'
})
export class ContactsListComponent implements OnInit {
  contacts$: Observable<Array<Contact>>;
  terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService, private eventBus: EventBusService) {}

  ngOnInit() {
    this.contacts$ = this.contactsService.getContacts();
    this.terms$.pipe(debounceTime(400),
      distinctUntilChanged()).subscribe(term => this.search(term));
    this.eventBus.emit('appTitleChange', 'Contact List');
  }

  search(term: string) {
    this.contacts$ = this.contactsService.search(term);
  }
}
