import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, convertToParamMap, Router} from '@angular/router';
import {ContactsService} from '../contacts.service';
import {Observable} from 'rxjs/internal/Observable';
import {Contact} from '../models/contact';
import {EventBusService} from '../event-bus-service';
import {switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html'
})
export class ContactsDetailViewComponent implements OnInit {

  contact: Contact;

  constructor(private route: ActivatedRoute,
              private contactsService: ContactsService,
              private router: Router,
              private eventBus: EventBusService) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap(paramMap => this.contactsService.getContact(paramMap.get('id'))),
        tap(contact => this.eventBus.emit('appTitleChange', `Detail of ${contact.name}`)))
      .subscribe(contact => this.contact = contact);
  }

  navigateToEditor() {
    this.router.navigate(['edit'], {
      relativeTo: this.route});
  }
}
