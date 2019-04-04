import { Component, OnInit } from '@angular/core';
import { GetUserService } from 'src/app/services/get.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
   data:any;
  constructor(private FAQservice : GetUserService) { }

  ngOnInit() {
    this.FAQservice.getFAQs().subscribe(response => { 
      this.data=response;
      console.log(this.data);
    });
    
  }

}
