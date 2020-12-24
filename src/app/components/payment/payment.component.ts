import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders } from "@angular/common/http";
import { UserService } from "../../../app/services/user.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

 // Public params
 paymentForm: FormGroup;
 loading = false;
 message:any;
 id:any;
 type:any;
 userpaymentlist=[];
 constructor( private fb: FormBuilder,
              private router: Router,
              private route:ActivatedRoute,
              private user:UserService) {}

  ngOnInit() {
    this.initLoanForm();
    this.route.params.subscribe(params=>{
		console.log("Params : "+JSON.stringify(params));
	  this.id= params['id'];
	  //this.type = params['type'];
	  const formData: FormData = new FormData();
	  var user_id=localStorage.getItem('currentUserId')
     console.log(user_id)
     formData.append("user_id", user_id);
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type','multipart/form-data');
	//   this.user.usePaymentLinkDetails().subscribe((data: any) => {
	// 	console.log(data.result)
	this.user.usePaymentLinkDetails(formData).subscribe((res:any) => {  
      
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
			description: ['', Validators.compose([
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
		// if(this.type == 'loan')
		// {
			var customer_id=localStorage.getItem('currentUserId')
			const formData: FormData = new FormData();
			formData.append("user_id", this.id);
			formData.append("amount_paid", this.paymentForm.value.amount_paid);
			// formData.append("customer_id", customer_id);
			formData.append("description", this.paymentForm.value.description);
		    console.log(this.paymentForm.value.description)
			
			const httpHeaders = new HttpHeaders();
			httpHeaders.append('Content-Type','multipart/form-data');
			
			// this.user.pay(formData).subscribe((res: any)=>{
			// 	console.log(res)
				
			// 		this.router.navigate(['/paymentlinkdetails']);
			
			
				
			// 	}, (err)=>{
			// 		console.log(err)
				
			// 	}
			// )
			this.user.checkout(formData).subscribe((res: any)=>{
				console.log(res.result)
					
						//this.router.navigate([res.result.Data.InvoiceURL]);
						window.location.href = res.result.Data.InvoiceURL;
						//this.router.navigate(['/thankyou']);
				
					
					}, (err)=>{
						console.log(err)
					
					}
				)
		//}
		// else if( this.type== "rent")
		// {
		// 	var customer_id=localStorage.getItem('currentUserId')
		// 	const formData: FormData = new FormData();
		// 	formData.append("usersflat_id",  this.id);
		// 	formData.append("amount_paid", this.loanForm.value.amount_paid);
		// 	formData.append("customer_id", customer_id);
		// 	formData.append("description", this.loanForm.value.description);
		
			
		// 	const httpHeaders = new HttpHeaders();
		// 	httpHeaders.append('Content-Type','multipart/form-data');
			
		// 	this.user.paidFlat(formData).subscribe((res: any)=>{
		// 		console.log(res)
		// 	this.router.navigate(['/flathistory']);
				
		// 		}, (err)=>{
		// 			console.log(err)
				
		// 		}
		// 	)
		// 	//console.log("Pay rent");
		// }
		// else{
		// 	console.log("Mode not found");
		// }
	
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

