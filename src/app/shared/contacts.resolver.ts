import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Contact} from '../models/contact';
import {ContactsService} from '../contacts.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class ContactsResolver implements Resolve<Contact> {

  constructor(private contactsService: ContactsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Contact> {
    return this.contactsService.getContact(route.paramMap.get('id'));
  }
}
