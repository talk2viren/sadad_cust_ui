import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
// Translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent implements OnInit {

  id:string;
  userForm: FormGroup;
  loading = false;
  constructor(private router: Router,
              private user:UserService,
              private activatedRoute: ActivatedRoute,
			  private fb: FormBuilder,
			  private translate: TranslateService) {
				translate.setDefaultLang('en');
			   }

  ngOnInit() {
	this.translate.use(localStorage.getItem('lang'));
    this.initform();
    this.id=localStorage.getItem('currentUserId');
    
		
    console.log(this.id)
		this.user.getUsers().subscribe((data: any) => {
			console.log(data.result)
			
			for(var i=0;i< data.result.length; i++){
				// localStorage.setItem('image', data.result[i].image);
				// console.log(localStorage.getItem('image'))
				//console.log(data.result[i].id)
				if(data.result[i].id==this.id){
					localStorage.setItem('image', data.result[i].image);
                     console.log(data.result[i].image)
					this.userForm.patchValue({
					  fullname: data.result[i].fullname,
					  email: data.result[i].email,
					  phone:data.result[i].phone,
					  
					});
				
				}
		
			}
			
		})	
  }

  selectedFile:File=null;
	onFileSelected(event){
		if(event.target.files.length>0)
		{
		 this.selectedFile=<File>event.target.files[0];
	
		}
	   
	}

  initform() {
		this.userForm = this.fb.group({
			fullname: ['', Validators.compose([
				Validators.required,
			])
			],
			email: ['', Validators.compose([
						Validators.required,
				])
			],
			phone: ['', Validators.compose([
				Validators.required,
		    ])
	        ],
			password: [''],
			image: ['']
				});
  }



   /**
	 * Form Submit
	 */
	submit() {
   
		const controls = this.userForm.controls;
		/** check form */
		if (this.userForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		}

		this.loading = true;
		
			
			const formData: FormData = new FormData();
			formData.append("id", this.id);
			formData.append("fullName", this.userForm.value.fullname);
			formData.append("email", this.userForm.value.email);
			formData.append("phone", this.userForm.value.phone);
			formData.append("password", this.userForm.value.password);
		    if(this.selectedFile!=null)
			{
				formData.append('image',this.selectedFile,this.selectedFile.name);
			}
			
			const httpHeaders = new HttpHeaders();
			httpHeaders.append('Content-Type','multipart/form-data');
			
			this.user.updateUser(formData).subscribe((res: any)=>{
				console.log(res)
				
					this.router.navigate(['/updateprofile']);
			
			
				
				}, (err)=>{
					console.log(err)
				
				}
			)
	
	
	}

	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.userForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}

}
