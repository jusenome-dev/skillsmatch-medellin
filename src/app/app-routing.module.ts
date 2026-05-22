import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessModelComponent } from './pages/business-model/business-model.component';
import { CompanyComponent } from './pages/company/company.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CustomerJourneyComponent } from './pages/customer-journey/customer-journey.component';
import { ExistingSolutionsComponent } from './pages/existing-solutions/existing-solutions.component';
import { HomeComponent } from './pages/home/home.component';
import { ImpactComponent } from './pages/impact/impact.component';
import { OpportunityComponent } from './pages/opportunity/opportunity.component';
import { ProductsServicesComponent } from './pages/products-services/products-services.component';
import { PrototypeComponent } from './pages/prototype/prototype.component';
import { TeamComponent } from './pages/team/team.component';
import { TraceabilityComponent } from './pages/traceability/traceability.component';
import { ValuePropositionComponent } from './pages/value-proposition/value-proposition.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'equipo', component: TeamComponent },
  { path: 'sobre-la-empresa', component: CompanyComponent },
  { path: 'oportunidad', component: OpportunityComponent },
  { path: 'soluciones-existentes', component: ExistingSolutionsComponent },
  { path: 'cliente-journey-map', component: CustomerJourneyComponent },
  { path: 'propuesta-de-valor', component: ValuePropositionComponent },
  { path: 'productos-servicios', component: ProductsServicesComponent },
  { path: 'modelo-de-negocio', component: BusinessModelComponent },
  { path: 'impacto', component: ImpactComponent },
  { path: 'trazabilidad', component: TraceabilityComponent },
  { path: 'prototipo', component: PrototypeComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
