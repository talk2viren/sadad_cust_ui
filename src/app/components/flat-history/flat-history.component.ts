import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-flat-history',
  templateUrl: './flat-history.component.html',
  styleUrls: ['./flat-history.component.scss']
})
export class FlatHistoryComponent implements OnInit {
  userflathistorylist:any;
  constructor(private router: Router,
    private user:UserService) { }

  ngOnInit() {
    this.loadUserFlatHistoryList();
  }
  loadUserFlatHistoryList()
  {
    const formData: FormData = new FormData();
    var customer_id=localStorage.getItem('currentUserId')
    formData.append("customer_id", customer_id);
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type','multipart/form-data');
    this.user.flatPaymentHistory(formData).subscribe((res:any) => {  
      console.log(res);
      this.userflathistorylist=res;
    },
      (err)=>{
      console.log(err)
      }
      )  
  }
}
