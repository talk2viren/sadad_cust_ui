import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders } from "@angular/common/http";
import { UserService } from "../../../app/services/user.service";

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  id:any;
  constructor(private fb: FormBuilder,
              private router: Router,
              private route:ActivatedRoute,
              private user:UserService) {}

  ngOnInit() {
    // this.route.params.subscribe(params=>{
		// 	this.id= params['Id'];
    // })
    this.route.queryParams.subscribe(params => {
      this.id = params['Id'];
      
    });
        console.log(this.id)
        

        this.user.getPaymentStatus(this.id).
	     subscribe((data:any)=>{
		   
	        console.log(data)
        },(error)=>{
          console.log(error)
				// const message = error.message;
				// this.layoutUtilsService.showActionNotification(message, MessageType.Create, 5000, true, true);
			}
    );
  }

}
