import {Component, OnInit} from '@angular/core';
import {Contact} from './models/contact';
import {CONTACT_DATA} from './data/contact-data';
import {ContactsService} from './contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ContactsService]
})
export class ContactsAppComponent implements OnInit {
  title = 'Angular Master Class';
  contacts: Contact[];

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  constructor(private contactsService: ContactsService) {
  }

}
