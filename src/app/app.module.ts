import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContactsMaterialModule} from './contacts-material.module';

import {ContactsAppComponent} from './app.component';
import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import { ContactsDetailComponentComponent } from './contacts-detail-component/contacts-detail-component.component';


@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES)],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
