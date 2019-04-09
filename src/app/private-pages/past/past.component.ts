import { Component, OnInit } from '@angular/core';
import { GetUserService } from 'src/app/services/get.service';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {
//get bookingservice to get the past bookings
  constructor(private bookingservice:GetUserService) { }
  data: any;
  ngOnInit() {
    this.bookingservice.getbookings({"past":true}).subscribe(response => { 
      this.data=response;
      
    });
  }

}
