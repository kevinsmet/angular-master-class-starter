import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../contacts.service';
import {Observable} from 'rxjs/internal/Observable';
import {Contact} from '../models/contact';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html'
})
export class ContactsDetailViewComponent implements OnInit {

  contact$: Observable<Contact>;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router) {
  }

  ngOnInit() {
    this.contact$ = this.contactsService.getContact(this.route.snapshot.params['id']);
  }

  navigateToEditor(event) {
    this.router.navigate(['edit'], {
      relativeTo: this.route});
  }

  navigateToList() {
    this.router.navigate(['/']);

  }
}
