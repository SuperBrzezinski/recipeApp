import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardToTabService {
  private tab$ = new Subject<string>();

  public changeTab(tab: string) {
    this.tab$.next(tab);
  }

  get tab() {
    return this.tab$;
  }
}
