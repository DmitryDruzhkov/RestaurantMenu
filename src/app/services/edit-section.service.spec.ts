import { TestBed } from '@angular/core/testing';

import { EditSectionService } from './edit-section.service';

describe('EditSectionService', () => {
  let service: EditSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
