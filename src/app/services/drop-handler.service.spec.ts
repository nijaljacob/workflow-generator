import { TestBed } from '@angular/core/testing';

import { DropHandlerService } from './drop-handler.service';

describe('DropHandlerService', () => {
  let service: DropHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
