import { GetUserService } from 'src/app/services/get.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,
    private bookingsnumber: GetUserService) { }
  profilename:any;
  data: any;
  totalbooking: any;
  ngOnInit() {
    this.profilename=localStorage.getItem('profilename')
    this.router.navigate(['/user/mypage/profile']);
    this.bookingsnumber.getbookingnumbers().subscribe(response => { 
      this.data=response;
      this.totalbooking=this.data.length;
      
    });
    
  }
  logout(){
    localStorage.clear();
  }

}
