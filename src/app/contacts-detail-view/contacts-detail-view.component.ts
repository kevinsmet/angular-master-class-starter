import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../contacts.service';
import {Observable} from 'rxjs/internal/Observable';
import {Contact} from '../models/contact';
import {EventBusService} from '../event-bus-service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html'
})
export class ContactsDetailViewComponent implements OnInit {

  contact$: Observable<Contact>;
  title = 'Detail';

  constructor(private route: ActivatedRoute,
              private contactsService: ContactsService,
              private router: Router,
              private eventBus: EventBusService) {
  }

  ngOnInit() {
    this.contact$ = this.contactsService.getContact(this.route.snapshot.params['id']).pipe(
      tap(contact => this.eventBus.emit('appTitleChange', `Detail of ${contact.name}`))
    );
    this.eventBus.emit('appTitleChange', 'Detail');
  }

  navigateToEditor() {
    this.router.navigate(['edit'], {
      relativeTo: this.route});
  }

  navigateToList() {
    this.router.navigate(['/']);

  }
}
