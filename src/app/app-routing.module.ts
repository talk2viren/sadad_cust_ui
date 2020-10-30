import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

// Common Components

import {PageLoginComponent} from "./components/page-login/page-login.component";
import {PageSignupComponent} from "./components/page-signup/page-signup.component";
import {PageComingSoonComponent} from "./components/page-coming-soon/page-coming-soon.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import { ForgetpwdComponent } from './components/forgetpwd/forgetpwd.component';

// Page Components

import {PageHome01Component} from "./components/page-home01/page-home01.component";
import {PageHome02Component} from "./components/page-home02/page-home02.component";
import {PageHome03Component} from "./components/page-home03/page-home03.component";
import {PageFAQComponent} from "./components/page-faq/page-faq.component";
import {PageContactComponent} from "./components/page-contact/page-contact.component";
import {PageAbout01Component} from "./components/page-about01/page-about01.component";
import {PageAbout02Component} from "./components/page-about02/page-about02.component";
import {PageBlogComponent} from "./components/page-blog/page-blog.component";
import {PageBlogDetailsComponent} from "./components/page-blog-details/page-blog-details.component";
import {PageLandingEcommerceComponent} from "./components/page-landing-ecommerce/page-landing-ecommerce.component";
import {PageLandingSendComponent} from "./components/page-landing-send/page-landing-send.component";
import {PageLandingReceiveComponent} from "./components/page-landing-receive/page-landing-receive.component";
import {PageHowItWorksReceiveComponent} from "./components/page-how-it-works-receive/page-how-it-works-receive.component";
import {PageHowItWorksSendComponent} from "./components/page-how-it-works-send/page-how-it-works-send.component";
import {PageHowItWorksPaybillsComponent} from "./components/page-how-it-works-paybills/page-how-it-works-paybills.component";
import { UserLoanComponent } from "./components/user-loan/user-loan.component";
import { PayLoanComponent } from "./components/pay-loan/pay-loan.component";
import { LoanHistoryComponent } from "./components/loan-history/loan-history.component";
// import { WepayComponent } from "./components/wepay/wepay.component";
import { WepayComponent } from './components/wepay/wepay.component';
import { AddcollectorComponent } from './components/addcollector/addcollector.component';
import { FlatHistoryComponent } from "./components/flat-history/flat-history.component";
import { PaymentComponent } from "./components/payment/payment.component";
import { PaymentlinkDetailsComponent } from "./components/paymentlink-details/paymentlink-details.component";
import { ThankYouComponent } from "./components/thank-you/thank-you.component";

const routes: Routes = [
  {
    path: "login",
    component: PageLoginComponent
  }, {
    path: "signup",
    component: PageSignupComponent
  }, {
    path: "home-01",
    component: PageHome01Component
  }, {
    path: "home-02",
    component: PageHome02Component
  }, {
    path: "home-03",
    component: PageHome03Component
  }, {
    path: "about-01",
    component: PageAbout01Component
  }, {
    path: "about-02",
    component: PageAbout02Component
  }, {
    path: "faq",
    component: PageFAQComponent
  }, {
    path: "contact",
    component: PageContactComponent
  }, {
    path: "blog",
    component: PageBlogComponent
  }, {
    path: "blog-details",
    component: PageBlogDetailsComponent
  }, {
    path: "landing-page-ecommerce",
    component: PageLandingEcommerceComponent
  }, {
    path: "landing-page-send",
    component: PageLandingSendComponent
  }, {
    path: "landing-page-receive",
    component: PageLandingReceiveComponent
  }, {
    path: "how-it-works-receive",
    component: PageHowItWorksReceiveComponent
  }, {
    path: "how-it-works-send",
    component: PageHowItWorksSendComponent
  }, {
    path: "how-it-works-paybills",
    component: PageHowItWorksPaybillsComponent
  }, {
    path: "coming-soon",
    component: PageComingSoonComponent
  }, 
  {
    path: "userloan",
    component: UserLoanComponent
  }, 
  {
    path: "payloan/:id",
    component: PayLoanComponent
  }, 
  {
    path: "pay/:id/:type",
    component: PayLoanComponent
  }, 
  {
    path: "pay/:id/:type",
    component: PayLoanComponent
  }, 
  {
    path: "loanhistory",
    component: LoanHistoryComponent
  }, 
  {
    path: "flathistory",
    component: FlatHistoryComponent
  }, 
  {
    path: "wepay",
    component: WepayComponent
  },
  {
    path: "payment/:id",
    component: PaymentComponent
  },
  {
    //path: "thankyou/:paymentId",
    path: "thankyou",
    component: ThankYouComponent,
    
  },
  // {
  //   path: "paymentlinkdetails",
  //   component: PaymentlinkDetailsComponent
  // },
  {
    
    path: "paymentlinkdetails",
    component: PaymentlinkDetailsComponent,
    data: { showRootComponents: false } 
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "addcollector",
    component: AddcollectorComponent
  },
  {
    path: "forgetpwd",
    component: ForgetpwdComponent
  },
   {
    path: "**",
    component: PageNotFoundComponent,
    data: {
      className: "error-page"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
