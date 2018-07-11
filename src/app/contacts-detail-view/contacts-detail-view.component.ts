import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../contacts.service';
import {Contact} from '../models/contact';
import {EventBusService} from '../event-bus-service';
import {map, switchMap, tap} from 'rxjs/operators';

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
    this.route.data
      .pipe(map(data => data['contact']))
      .subscribe(contact => this.contact = contact);
    // this.route.paramMap
    //   .pipe(switchMap(paramMap => this.contactsService.getContact(paramMap.get('id'))),
    //     tap(contact => this.eventBus.emit('appTitleChange', `Detail of ${contact.name}`)))
    //   .subscribe(contact => this.contact = contact);
  }

  navigateToEditor() {
    this.router.navigate(['edit'], {
      relativeTo: this.route});
  }
}
