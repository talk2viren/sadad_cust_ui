import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders } from "@angular/common/http";
import { UserService } from "../../../app/services/user.service";
// Translate
import { TranslateService } from '@ngx-translate/core';

declare let $: any;

@Component({selector: "app-page-login", 
templateUrl: "./page-login.component.html", 
styleUrls: ["./page-login.component.scss"]
})
export class PageLoginComponent implements OnInit {

  // Public params
	loginForm: FormGroup;
	loading = false;
	message:any;
	
  constructor( private fb: FormBuilder,
               private router: Router,
			   private user:UserService,
			   private translate: TranslateService) {
				translate.setDefaultLang('en');
			   }

  initialization() {
    //======================
    // Preloder
    //======================
    $(window).on("load", function () {
      $("#status").fadeOut();
      $("#preloader").delay(500).fadeOut("slow");
      $("body").delay(500).css({overflow: "visible"});
    });
    $(".sl-slider-caro").owlCarousel({dots: true, items: 1, nav: false, smartSpeed: 500});
    // ============================
    // Button Animation
    // ============================
    $(".btn").on("mouseenter mousemove", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find(".bh").css({top: relY, left: relX});
      var origin = relX + "px" + " " + relY + "px";
    }).on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find(".bh").css({top: relY, left: relX});
    });
  }

  
 

  ngOnInit() {
    this.initLoginForm();
    this.initialization();
    
  }

  changelang(language:string){
	//console.log(language)
	localStorage.setItem('lang', language);
	// console.log(localStorage.getItem('lang'))
	this.translate.use(localStorage.getItem('lang'));
	//console.log(event.value)
	//localStorage.setItem('lang',lang.value);
	//this.translate.use(lang.value)
	//window.location.reload();

}

  initLoginForm() {
		this.loginForm = this.fb.group({
			email: ['', Validators.compose([
				Validators.required,
				Validators.email,
				// Validators.minLength(3),
				// Validators.maxLength(320)
			])
			],
			password: ['', Validators.compose([
				Validators.required,
				// Validators.minLength(3),
				// Validators.maxLength(100)
			])
			]
		});
  }
  
  /**
	 * Form Submit
	 */
	submit() {
   
		const controls = this.loginForm.controls;
		/** check form */
		if (this.loginForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		}

		this.loading = true;
		
		const formData: FormData = new FormData();
		formData.append("email", this.loginForm.value.email);
		formData.append("password", this.loginForm.value.password);
	
		
		const httpHeaders = new HttpHeaders();
		httpHeaders.append('Content-Type','multipart/form-data');
		
		this.user.login(formData).subscribe((res: any)=>{
			console.log(res)
			    if(res){
					
					localStorage.setItem("token",res.token)
                    localStorage.setItem("currentUserId",res.result[0].id)
					localStorage.setItem("currentUserRole",res.result[0].access)
				    localStorage.setItem("civil_id",res.result[0].civil_id)
					this.user.UserRole=localStorage.getItem('currentUserRole')
					this.user.UserId=localStorage.getItem('currentUserId')
					console.log(this.user.UserRole);
				
					if(this.user.UserRole=='User')
					{
						this.router.navigate(['/home-01']);
						
					}else{
						this.loading = true;
						this.message = `Authentication Failed.`;
						
						this.loading = false;
						this.router.navigate(['/login']);
					}
				}else{
					this.loading = true;
					this.message = `Authentication Failed.`;
				
					this.loading = false;
					this.router.navigate(['/login']);
				}
			
			}, (err)=>{
				this.loading = true;
				this.message = `Authentication Failed.`;
				this.loading = false;
				this.router.navigate(['/login']);
			
			}
		)
	
	}

	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.loginForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}
}
