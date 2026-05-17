import { Component } from '@angular/core';
import { customerProfileBlocks, valueFitCards, valueMapBlocks, FitCard, ValueBlock } from '../../data/site-content';

@Component({
  selector: 'app-value-proposition',
  templateUrl: './value-proposition.component.html',
  styleUrls: ['./value-proposition.component.scss']
})
export class ValuePropositionComponent {
  customerBlocks: ValueBlock[] = customerProfileBlocks;
  valueBlocks: ValueBlock[] = valueMapBlocks;
  fitCards: FitCard[] = valueFitCards;
}
