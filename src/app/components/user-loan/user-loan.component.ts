import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders } from "@angular/common/http";
import { UserService } from "../../../app/services/user.service";

@Component({
  selector: 'app-user-loan',
  templateUrl: './user-loan.component.html',
  styleUrls: ['./user-loan.component.scss']
})
export class UserLoanComponent implements OnInit {
  userloanlist=[]; 
  constructor(private router: Router,
              private user:UserService) { }

  ngOnInit() {
    this.loadUserLoanList();
  }

  loadUserLoanList() {
    const formData: FormData = new FormData();
    var customer_id=localStorage.getItem('currentUserId')
    formData.append("customer_id", customer_id);
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type','multipart/form-data');
    this.user.userLoan(formData).subscribe((res:any) => {  
        console.log(res)
        this.userloanlist=res;
        
         
     },
     (err)=>{
      console.log(err)
     }
     )  
		
	}

}
