import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders } from "@angular/common/http";
import { UserService } from "../../../app/services/user.service";

@Component({
  selector: 'app-newcustomerpayment-link',
  templateUrl: './newcustomerpayment-link.component.html',
  styleUrls: ['./newcustomerpayment-link.component.scss']
})
export class NewcustomerpaymentLinkComponent implements OnInit {

 // Public params
 paymentForm: FormGroup;
 loading = false;
 message:any;
 id:any;
 user_id:any;
 userpaymentlist=[];
 constructor( private fb: FormBuilder,
              private router: Router,
              private route:ActivatedRoute,
              private user:UserService) {}

  ngOnInit() {
    this.initLoanForm();
    this.route.params.subscribe(params=>{
		//console.log("Params : "+JSON.stringify(params));
	  this.id= params['id'];
	  //this.user_id = params['user_id'];
	  const formData: FormData = new FormData();
	  // var user_id=localStorage.getItem('currentUserId')
    //  console.log(user_id)
     formData.append("id", this.id);
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type','multipart/form-data');
	//   this.user.usePaymentLinkDetails().subscribe((data: any) => {
	// 	console.log(data.result)
	this.user.usePaymentLinkDetails1(formData).subscribe((res:any) => {  
      
		// this.userpaymentlist=res.result;
		console.log(res.result)
		for(var i=0;i<res.result.length; i++){
   
			if(res.result[i].id==this.id){
				this.paymentForm.patchValue({
				amount_paid: res.result[i].price,
				//   email: res.result[i].email,
				//   userName: res.result[i].username,
				//   phone:res.result[i].phone,
				//   userType:res.result[i].access
				});
			
			}
	
		  }
		
  
	  },
		(err)=>{
		console.log(err)
		}
		)  
		
		
		
     
    })
  }

  initLoanForm() {
		this.paymentForm = this.fb.group({
			amount_paid: ['', Validators.compose([
				Validators.required,
			])
			],
			descrpition: ['', Validators.compose([
				Validators.required,
		  ])
			]
		});
  }

    /**
	 * Form Submit
	 */
	submit() {
   
		const controls = this.paymentForm.controls;
		/** check form */
		if (this.paymentForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		}

		this.loading = true;
		
			//var customer_id=localStorage.getItem('currentUserId')
			const formData: FormData = new FormData();
			formData.append("user_id", this.id);
			formData.append("amount_paid", this.paymentForm.value.amount_paid);
			// formData.append("customer_id", customer_id);
			formData.append("descrpition", this.paymentForm.value.descrpition);
		
			
			const httpHeaders = new HttpHeaders();
			httpHeaders.append('Content-Type','multipart/form-data');
			
			this.user.pay(formData).subscribe((res: any)=>{
				//console.log(res)
				alert("Payment Done Successfully");
				this.paymentForm.reset();
				//this.router.navigate(['/paymentlinkdetails']);
			
			
				
				}, (err)=>{
					console.log(err)
				
				}
			)
		
	
	}

	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.paymentForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}

}


