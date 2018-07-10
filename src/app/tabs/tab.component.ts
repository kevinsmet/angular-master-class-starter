import {Component, Input, OnInit} from '@angular/core';
import {TabsComponent} from './tabs.component';

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit {

@Input()  selected = false;
@Input()  title = '';

  constructor(private tabs: TabsComponent) { }

  ngOnInit() {
    this.tabs.addTab(this);
  }

}
