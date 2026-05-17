import { Component } from '@angular/core';
import {
  journeySteps,
  JourneyMapStep,
  personaFrustrations,
  personaGoals,
  personaMotivations,
  personaNeeds,
  userPersona
} from '../../data/site-content';

@Component({
  selector: 'app-customer-journey',
  templateUrl: './customer-journey.component.html',
  styleUrls: ['./customer-journey.component.scss']
})
export class CustomerJourneyComponent {
  persona = userPersona;
  needs: string[] = personaNeeds;
  frustrations: string[] = personaFrustrations;
  motivations: string[] = personaMotivations;
  goals: string[] = personaGoals;
  steps: JourneyMapStep[] = journeySteps;
}
