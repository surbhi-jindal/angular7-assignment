import { GetUserService } from './../../services/get.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcomings',
  templateUrl: './upcomings.component.html',
  styleUrls: ['./upcomings.component.css']
})
export class UpcomingsComponent implements OnInit {

  constructor(private bookingservice:GetUserService) { }
  data: any;
  ngOnInit() {
    //to get upcoming bookings
    this.bookingservice.getbookings({"upcoming":true}).subscribe(response => { 
      this.data=response;
      console.log(this.data);
    });
      
  }

}
