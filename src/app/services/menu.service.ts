import { Injectable, OnDestroy } from '@angular/core';
import { SectionsService } from './sections.service';
import { LocalStorageService } from './local-storage.service';
import { Section } from '../models/section';
import { Sections } from '../models/moc';
import { skip, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnDestroy {

  private onDestroy: Subject<void> = new Subject<void>();
  storageKey = 'Menu_Sections';

  constructor(
    private sectionsService: SectionsService,
    private localStorageService: LocalStorageService,
  ) {
    this.sectionsService.sections().pipe(
      skip(1),
      takeUntil(this.onDestroy)
    )
    .subscribe((sections: Section[]) => {
      this.localStorageService.setValue(this.storageKey, JSON.stringify(sections));
    });
  }

  initMenu(): void {
    let sections: Section[] = [];

    const storage = this.localStorageService.getValue(this.storageKey);
    if (storage) {
      sections = JSON.parse(storage);
    } else {
      sections = [...Sections];
    }

    this.sectionsService.setSections(sections);
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
