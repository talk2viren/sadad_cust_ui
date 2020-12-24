import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageHome01Component } from './components/page-home01/page-home01.component';
import { PageHome02Component } from './components/page-home02/page-home02.component';
import { PageHome03Component } from './components/page-home03/page-home03.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageFAQComponent } from './components/page-faq/page-faq.component';
import { PageComingSoonComponent } from './components/page-coming-soon/page-coming-soon.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';
import { PageAbout01Component } from './components/page-about01/page-about01.component';
import { PageAbout02Component } from './components/page-about02/page-about02.component';
import { PageBlogComponent } from './components/page-blog/page-blog.component';
import { PageBlogDetailsComponent } from './components/page-blog-details/page-blog-details.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { PageSignupComponent } from './components/page-signup/page-signup.component';
import { PageLandingEcommerceComponent } from './components/page-landing-ecommerce/page-landing-ecommerce.component';
import { PageLandingSendComponent } from './components/page-landing-send/page-landing-send.component';
import { PageLandingReceiveComponent } from './components/page-landing-receive/page-landing-receive.component';
import { PageHowItWorksReceiveComponent } from './components/page-how-it-works-receive/page-how-it-works-receive.component';
import { PageHowItWorksSendComponent } from './components/page-how-it-works-send/page-how-it-works-send.component';
import { PageHowItWorksPaybillsComponent } from './components/page-how-it-works-paybills/page-how-it-works-paybills.component';
import { UserService } from './services/user.service';
import { UserLoanComponent } from './components/user-loan/user-loan.component';
import { PayLoanComponent } from './components/pay-loan/pay-loan.component';
import { LoanHistoryComponent } from './components/loan-history/loan-history.component';
import { WepayComponent } from './components/wepay/wepay.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AddcollectorComponent } from './components/addcollector/addcollector.component';
import { ForgetpwdComponent } from './components/forgetpwd/forgetpwd.component';
import { FlatHistoryComponent } from './components/flat-history/flat-history.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentlinkDetailsComponent } from './components/paymentlink-details/paymentlink-details.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { AuthGuard } from './components/auth/auth.guard';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { NewcustomerpaymentLinkComponent } from './components/newcustomerpayment-link/newcustomerpayment-link.component';
import { SendlinkPaymentconfirmationComponent } from './components/sendlink-paymentconfirmation/sendlink-paymentconfirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageHome01Component,
    PageHome02Component,
    PageHome03Component,
    PageHeaderComponent,
    PageFooterComponent,
    PageFAQComponent,
    PageComingSoonComponent,
    PageContactComponent,
    PageAbout01Component,
    PageAbout02Component,
    PageBlogComponent,
    PageBlogDetailsComponent,
    PageLoginComponent,
    PageSignupComponent,
    PageLandingEcommerceComponent,
    PageLandingSendComponent,
    PageLandingReceiveComponent,
    PageHowItWorksReceiveComponent,
    PageHowItWorksSendComponent,
    PageHowItWorksPaybillsComponent,
    UserLoanComponent,
    PayLoanComponent,
    LoanHistoryComponent,
    WepayComponent,
    AdduserComponent,
    AddcollectorComponent,
    ForgetpwdComponent,
    FlatHistoryComponent,
    PaymentComponent,
    PaymentlinkDetailsComponent,
    ThankYouComponent,
    UpdateuserComponent,
    NewcustomerpaymentLinkComponent,
    SendlinkPaymentconfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  //providers: [UserService],
  providers: [{provide: LocationStrategy,useClass: HashLocationStrategy},AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
