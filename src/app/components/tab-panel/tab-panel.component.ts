import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { CardToTabCommunicatorService } from 'src/app/services/card-to-tab-communicator.service';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements OnInit {
  @ViewChild('nav') nav!: NgbNav;
  constructor(private cardToTab: CardToTabCommunicatorService) {}

  ngOnInit(): void {
    this.cardToTab.getListener.subscribe(() => this.selectDetails());
  }

  selectDetails() {
    this.nav.select('details');
  }

  // selectTab(ngbNavItem: any) {
  //   this.nav.select(ngbNavItem);
  // }
}
