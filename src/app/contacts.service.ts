import {Injectable} from '@angular/core';
import {Contact} from './models/contact';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';

interface ContactResponse { item: Contact; }
interface ContactsResponse { items: Contact[]; }

@Injectable()
export class ContactsService {

  API_ENDPOINT = 'http://localhost:4201/api';

  constructor(private http: HttpClient) {
  }

  getContacts(): Observable<Array<Contact>> {
    return this.http.get<ContactsResponse>(`${this.API_ENDPOINT}/contacts`).pipe(map((data) => data.items));
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get<ContactResponse>(`${this.API_ENDPOINT}/contacts/${id}`).pipe(map(data => data.item));
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<ContactResponse>(`${this.API_ENDPOINT}/contacts/${contact.id}`, contact)
      .pipe(map ((data) => data.item));
  }
}
