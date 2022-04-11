import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { CardToTabCommunicatorService } from 'src/app/services/card-to-tab-communicator.service';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements OnInit {
  @ViewChild('nav') nav!: NgbNav;

  activatedTab: string = 'details';
  constructor(
    private cardToTab: CardToTabCommunicatorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cardToTab.getListener.subscribe(() => this.selectDetails());

    console.log(this.route.snapshot.params['id']);

    this.activatedTab = this.route.snapshot.params['id'];

    console.log(this.activatedTab);
  }

  selectDetails() {
    this.nav.select('details');
  }

  // selectTab(ngbNavItem: any) {
  //   this.nav.select(ngbNavItem);
  // }
}
