import { Component } from '@angular/core';
import { products, servicePlans, ProductService, ServicePlan } from '../../data/site-content';

@Component({
  selector: 'app-products-services',
  templateUrl: './products-services.component.html',
  styleUrls: ['./products-services.component.scss']
})
export class ProductsServicesComponent {
  products: ProductService[] = products;
  plans: ServicePlan[] = servicePlans;
}
