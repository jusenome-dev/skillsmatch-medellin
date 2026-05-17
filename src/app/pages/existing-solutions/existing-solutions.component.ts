import { Component } from '@angular/core';
import { existingSolutions, existingSolutionsLearnings, ReferenceCard } from '../../data/site-content';

@Component({
  selector: 'app-existing-solutions',
  templateUrl: './existing-solutions.component.html',
  styleUrls: ['./existing-solutions.component.scss']
})
export class ExistingSolutionsComponent {
  solutions: ReferenceCard[] = existingSolutions;
  learnings: string[] = existingSolutionsLearnings;
}
