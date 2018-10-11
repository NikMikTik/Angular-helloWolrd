import { TestBed, inject } from '@angular/core/testing';

import { GetAllCampaignService } from './get-all-campaign.service';

describe('GetAllCampaignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllCampaignService]
    });
  });

  it('should be created', inject([GetAllCampaignService], (service: GetAllCampaignService) => {
    expect(service).toBeTruthy();
  }));
});
