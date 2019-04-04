import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
  profilename:any;
  ngOnInit() {
    this.profilename=localStorage.getItem('profilename')
    this.router.navigate(['/user/mypage/profile']);
    
  }
  logout(){
    localStorage.clear();
  }

}
