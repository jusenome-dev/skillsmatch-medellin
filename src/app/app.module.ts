import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessModelComponent } from './pages/business-model/business-model.component';
import { CompanyComponent } from './pages/company/company.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CustomerJourneyComponent } from './pages/customer-journey/customer-journey.component';
import { ExistingSolutionsComponent } from './pages/existing-solutions/existing-solutions.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ImpactComponent } from './pages/impact/impact.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { OpportunityComponent } from './pages/opportunity/opportunity.component';
import { ProductsServicesComponent } from './pages/products-services/products-services.component';
import { PrototypeComponent } from './pages/prototype/prototype.component';
import { TeamComponent } from './pages/team/team.component';
import { TraceabilityComponent } from './pages/traceability/traceability.component';
import { ValuePropositionComponent } from './pages/value-proposition/value-proposition.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TeamComponent,
    CompanyComponent,
    OpportunityComponent,
    ExistingSolutionsComponent,
    CustomerJourneyComponent,
    ValuePropositionComponent,
    ProductsServicesComponent,
    BusinessModelComponent,
    PrototypeComponent,
    ImpactComponent,
    TraceabilityComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
