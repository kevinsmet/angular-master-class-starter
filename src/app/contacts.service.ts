import { Injectable } from '@angular/core';
import {Contact} from './models/contact';
import {CONTACT_DATA} from './data/contact-data';

@Injectable({
  providedIn: "root"
})
export class ContactsService {

  contacts: Contact[] = CONTACT_DATA;

  constructor() { }

  getContacts() {
    return this.contacts;
  }

}
