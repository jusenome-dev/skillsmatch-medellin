import { Component } from '@angular/core';
import { businessModel, monetizationCards, BusinessCanvasBlock, CardItem } from '../../data/site-content';

@Component({
  selector: 'app-business-model',
  templateUrl: './business-model.component.html',
  styleUrls: ['./business-model.component.scss']
})
export class BusinessModelComponent {
  canvasBlocks: BusinessCanvasBlock[] = businessModel;
  monetizationCards: CardItem[] = monetizationCards;
}
