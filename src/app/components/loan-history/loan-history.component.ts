import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders } from "@angular/common/http";
import { UserService } from "../../../app/services/user.service";


@Component({
  selector: 'app-loan-history',
  templateUrl: './loan-history.component.html',
  styleUrls: ['./loan-history.component.scss']
})
export class LoanHistoryComponent implements OnInit {

  userloanhistorylist=[]; 
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
    this.user.loanPaymentHistory(formData).subscribe((res:any) => {  
      console.log(res)
      this.userloanhistorylist=res;
      

    },
      (err)=>{
      console.log(err)
      }
      )  
    
  }

}
