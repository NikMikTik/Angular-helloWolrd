import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';
import { LogoutService } from './../services/logout.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ViewChild } from '@angular/core';
import { GetAllCampaignService } from 'src/app/services/get-all-campaign.service';
import { DashboardElement } from './../dashboard-element';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // userEmail: string;
  //result;
  hey;
  dashboardElement:DashboardElement[] = [];
  displayedColumns: string[] = ['merchantName', 'campaignName', 'typeOfCampaign', 'startDate','endDate','status'];
  dataSource;src;
  isLoggedIn:boolean;
  constructor(private router: Router, private getAllCampaignService: GetAllCampaignService,private loginService: LoginService,private logoutService: LogoutService) {
    if (!this.loginService.isLoggedIn())
    this.router.navigate(['login']);
  }

  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit() {
    this.isLoggedIn=this.loginService.isLoggedIn();
    // this.loginService.getUserEmail().subscribe(val =>{ this.userEmail=val; })
    // this.userEmail = localStorage.getItem('user');
    this.getAllCampaignService.getAllCampaign().subscribe((result:DashboardElement[]) =>{
      this.dashboardElement=result;
      console.log(result);
      // console.log(result);
      console.log(this.dashboardElement);
     this.dataSource = new MatTableDataSource(this.dashboardElement);
     this.dataSource.sort = this.sort;
    //  console.log("assets/img/"+result[5].imageUrl);
    //  this.src="assets/img/"+result[5].imageUrl;
    //  let reader = new FileReader();
    //  let img=reader.readAsDataURL(result['image']);
 //   alert(result['merchantName']);
  }
      ,
      (error: Response) => {
        if (error)
          alert('An Unexpected Error has Occured... ' + error);
        else {
          throw error;
        }
      });

  }

// getAllCampaign(){
//   this.getAllCampaignService.getAllCampaign().subscribe((result:DashboardElement[]) =>{
//     this.dashboardElement=result;
//     console.log('in hererejgh')
//   alert(result);}
//     ,
//     (error: Response) => {
//       if (error)
//         alert('An Unexpected Error has Occured... ' + error);
//       else {
//         throw error;
//       }
//     });
// }


  logout()
  {
       this.logoutService.logout()
    .subscribe(result => {
      if (result['code'] === 200) {

        localStorage.removeItem('token');
        // localStorage.removeItem('user');

        this.router.navigate(['login']);
      }
      else if (result['code'] === 403) {
        this.router.navigate(['login']);
      }
      else {
        this.router.navigate(['login']);
      }
    }, (error: Response) => {
      if (error)
        alert('An Unexpected Error has Occured... ' + error);
      else {
        throw error;
      }
    });
  }


}
