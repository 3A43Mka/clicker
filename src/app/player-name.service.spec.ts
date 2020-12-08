import { TestBed } from '@angular/core/testing';

import { PlayerNameService } from './player-name.service';

describe('PlayerNameService', () => {
  let service: PlayerNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
