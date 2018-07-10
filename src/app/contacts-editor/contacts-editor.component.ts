import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
})
export class ContactsEditorComponent implements OnInit {

  contact: Contact = <Contact>{address: {}};

  constructor(private contactsService: ContactsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.contactsService.getContact(id).subscribe(
      contact => {
        this.contact = contact;
      }
    );
  }

  cancel(contact: Contact) {
    this.goToDetails(contact);
  }

  save(contact: Contact) {
  this.contactsService.updateContact(contact)
    .subscribe(() => this.goToDetails(contact));
  }

  private goToDetails (contact: Contact) {
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute});
  }
}