import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { CardToTabService } from 'src/app/services/card-to-tab.service';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements OnInit {
  @ViewChild('nav') nav!: NgbNav;

  activatedTab: string = 'details';
  constructor(
    private route: ActivatedRoute,
    private cardToTab: CardToTabService
  ) {}

  ngOnInit(): void {
    this.cardToTab.tab.subscribe((tab) => {
      this.selectTab(tab);
    });
  }

  // selectDetails() {
  //   this.nav.select('details');
  // }

  selectTab(tabName: string) {
    this.nav.select(tabName);
  }
}
