import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable({ 
providedIn: 'root' 
}) 
export class GetUserService { 

constructor(private http: HttpClient) {} 
//api to get user data
 getUser(userData){ 
     return this.http.get('http://localhost:3000/users',{ 
     params :userData 
     }); 
    }
    //api to get user data on profile form
 getProfile(id) {
    return this.http.get('http://localhost:3000/users/'+id
    )
 };
 // api to get bookings
 getbookings(upcomingOrPast){ 
    return this.http.get('http://localhost:3000/my-bookings',{ 
        params :upcomingOrPast
    }); 
    

   }
   //api to get faqs
   getFAQs(){ 
      return this.http.get('http://localhost:3000/FAQs',{ 
          
      }); 
   }
   getbookingnumbers(){ 
      return this.http.get('http://localhost:3000/my-bookings',{ 
          
      }); 
   }

}
