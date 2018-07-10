import {Component, OnInit} from '@angular/core';
import {TabComponent} from './tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {

  tabs: Array<TabComponent> = [];

  constructor() { }

  ngOnInit() {
  }

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      this.select(tab);
    }
    this.tabs.push(tab);
  }

  select(tab: TabComponent) {
    this.tabs.forEach(selectedTab => {
      selectedTab.selected = false; });
      tab.selected = true;
  }
}
