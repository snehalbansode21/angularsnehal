import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { BookaneventComponent } from './bookanevent/bookanevent.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { ClientfeedbackComponent } from './clientfeedback/clientfeedback.component';
import { RouterModule } from '@angular/router';

import {NgModel, FormsModule, NgForm} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    EventsComponent,
    PortfolioComponent,
    FeedbackComponent,
    ContactUsComponent,
    MydetailsComponent,
    BookaneventComponent,
    PaymentdetailsComponent,
    BookappointmentComponent,
    ClientfeedbackComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "",component: HomeComponent },
      { path: "mydetails",component: MydetailsComponent},
      { path: "bookanevent",component: BookaneventComponent},
      { path: "paymentdetails",component: PaymentdetailsComponent},
      { path: "bookappointment",component: BookappointmentComponent },
      { path: "clientfeedback",component: ClientfeedbackComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
