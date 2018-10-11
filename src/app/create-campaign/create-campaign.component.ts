import { Component, OnInit } from '@angular/core';
import { Merchant } from 'src/app/merchant';
import { TypeOfCampaign } from './../TypeOfCampaign';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { CampaignService } from './../services/campaign.service';
import { LoginService } from './../services/login.service';


@Component({
  selector: 'app-create-campaign,slice-string-pipe',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {
  campaignSuccess: boolean;
  invalidCampaign: boolean;
  campaignTabStatus: boolean;
  commsSuccess: boolean;
  mN: string; cN: string; toC; sD: string; abc: string; xyz: string; eD: string; cT:string;ch:string;lD:string;


  createCampaignForm = new FormGroup({
    merchantName: new FormControl('', [Validators.required]),
    campaignName: new FormControl('', [Validators.required]),
    typeOfCampaign: new FormControl('', [Validators.required])
    ,
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required])
  });

    constructor(private router: Router, private campaignService: CampaignService, private loginService: LoginService) {
    if (!this.loginService.isLoggedIn())
      this.router.navigate(['login']);
  }

  ngOnInit() {
     this.campaignTabStatus=true;
  }



  merchants: Merchant[] = [
    { value: 'Courts Singapore', options: 'Courts Singapore' },
    { value: 'Bee Cheng Hiang', options: 'Bee Cheng Hiang' },
    { value: 'Skechers', options: 'Skechers' },
    { value: 'Nanyang Optical', options: 'Nanyang Optical' },
    { value: 'Smooy Youghurt Singapore', options: 'Smooy Youghurt Singapore' }
  ];

  typeOfCampaigns: TypeOfCampaign[] = [
    { value: 'Awareness', options: 'Awareness' },
    { value: 'Activation', options: 'Activation' },
    // {value: '3', options: 'Skechers'},
    // {value: '4', options: 'Nanyang Optical'},
    // {value: '5', options: 'Smooy Youghurt Singapore'}
  ];


  createCampaign(createCampaignForm) {
    this.campaignService.createCampaign(createCampaignForm.value).subscribe(result => {
      if (result['code'] === 200) {
        this.campaignSuccess = true;
        this.mN = this.createCampaignForm.get('merchantName').value;
        this.cN = this.createCampaignForm.get('campaignName').value;
        this.toC = this.createCampaignForm.get('typeOfCampaign').value;
        this.sD = this.createCampaignForm.get('startDate').value;
        this.abc = this.sD.toString().slice(0, 15);
        this.eD = this.createCampaignForm.get('endDate').value;
        this.xyz = this.eD.toString().slice(0, 15);
        this.campaignTabStatus = false;
        localStorage.setItem('merchantName',this.mN );
        localStorage.setItem('campaignName',this.cN );
        localStorage.setItem('typeOfCampaign',this.toC );
        localStorage.setItem('startDate',  this.abc );
        localStorage.setItem('endDate',  this.xyz );
        
      } else {
        this.invalidCampaign = true;
      }
    }, (error: Response) => { 
      if (error)
        alert('An Unexpected Error has Occured... ' + error);
      else {
        throw error;
      }
    });



  }

  // COMMS CODE:

  createCommsForm =new FormGroup({
    commsTitle:new FormControl('',[Validators.required]),
    channel:new FormControl('',[Validators.required])
  });

  createComms(createCommsForm){
    this.cT = this.createCommsForm.get('commsTitle').value;
    this.ch = this.createCommsForm.get('channel').value;
    this.lD='Not Set';
    this.commsSuccess=true;
  }
}
