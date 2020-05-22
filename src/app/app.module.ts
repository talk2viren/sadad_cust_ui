import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    PageHowItWorksPaybillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
