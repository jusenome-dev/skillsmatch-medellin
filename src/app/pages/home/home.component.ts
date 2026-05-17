import { Component } from '@angular/core';
import { projectSummary, homePillars, CardItem } from '../../data/site-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  project = projectSummary;
  pillars: CardItem[] = homePillars;
}
