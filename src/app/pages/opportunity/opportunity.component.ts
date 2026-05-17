import { Component } from '@angular/core';
import { affectedActors, opportunityCauses, opportunityDataCards, CardItem, ProblemDataCard } from '../../data/site-content';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent {
  dataCards: ProblemDataCard[] = opportunityDataCards;
  actors: CardItem[] = affectedActors;
  causes: string[] = opportunityCauses;
}
