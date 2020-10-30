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
    this.route.params.subscribe(params=>{
      console.log("Params : "+JSON.stringify(params));
      this.id= params['id'];
     
       
      })
  }

}
