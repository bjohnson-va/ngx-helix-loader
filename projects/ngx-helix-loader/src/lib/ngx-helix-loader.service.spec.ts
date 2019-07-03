import { TestBed } from '@angular/core/testing';

import { NgxHelixLoaderService } from './ngx-helix-loader.service';

describe('NgxHelixLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxHelixLoaderService = TestBed.get(NgxHelixLoaderService);
    expect(service).toBeTruthy();
  });
});
