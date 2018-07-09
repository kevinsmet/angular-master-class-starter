import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDetailComponentComponent } from './contacts-detail-component.component';

describe('ContactsDetailComponentComponent', () => {
  let component: ContactsDetailComponentComponent;
  let fixture: ComponentFixture<ContactsDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
