import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addcollector',
  templateUrl: './addcollector.component.html',
  styleUrls: ['./addcollector.component.scss']
})
export class AddcollectorComponent implements OnInit {

  signupForm:FormGroup;
  loading:false;
  msg: string = null;
  showMsg: boolean = false;

  constructor(
    private user:UserService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  initialization() {
    //======================
    // Preloder
    //======================
    
  }

  ngOnInit() {
    this.initialization();
    this.initSignForm();
  }
  initSignForm() {
		this.signupForm = this.fb.group({
			email: ['', Validators.compose([
				Validators.required,
				Validators.email,
			])
			],
		
      fullName: ['', Validators.compose([
				Validators.required,	
			])
      ],
      phone: ['', Validators.compose([
				Validators.required,	
			])
      ],
      company_name: ['', Validators.compose([
				Validators.required,	
			])
      ],
      userType: ['', Validators.compose([
				Validators.required,	
			])
			],
		});
  }

  submit() {
		const controls = this.signupForm.controls;

		// check form
		if (this.signupForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		}

	//	this.loading = true;
		const formData: FormData = new FormData();
	
		formData.append("fullName", this.signupForm.value.fullName);
		formData.append("email", this.signupForm.value.email);
		formData.append("company_name",this.signupForm.value.company_name);
		formData.append("phone",this.signupForm.value.phone);
    formData.append("password", this.signupForm.value.password);
   // formData.append("userType","User");
		 formData.append("userType", this.signupForm.value.userType);
	
        const httpHeaders = new HttpHeaders();
        httpHeaders.append('Content-Type','multipart/form-data');
        this.user.createUser(formData)
        .subscribe(res=>{
		  this.loading = false;
		  //console.log(res)
		  const message = `New user has been created successfully.`;
		 
		  this.showMsg= true;
		},
		  (err)=>{
			// this.loading = true;
			// const message = `Unable to Create User.`;
			// this.authNoticeService.setNotice(this.translate.instant(message), 'danger');
			// this.loading = false;
			// this.router.navigate(['/auth/register']);
		}
	);
	
	}

	/**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to valitors name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.signupForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}
}
