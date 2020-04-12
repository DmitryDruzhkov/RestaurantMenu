import { TestBed } from '@angular/core/testing';

import { EditPositionService } from './edit-position.service';

describe('EditPositionService', () => {
  let service: EditPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
