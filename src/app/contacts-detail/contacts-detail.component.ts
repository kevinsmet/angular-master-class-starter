import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Contact} from '../models/contact';
import {ContactsService} from '../contacts.service';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html'
})
export class ContactsDetailComponent {

@Input() contact: Contact;
@Output() edit = new EventEmitter<void>();
@Output() back = new EventEmitter<void>();

}
