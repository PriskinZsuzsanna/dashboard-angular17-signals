import { Component, Input, input, signal } from '@angular/core';
import { FilterEnum, Numbers, Data } from '../navigation/services/data.types';

@Component({
  selector: 'app-grid-box',
  standalone: true,
  imports: [],
  templateUrl: './grid-box.component.html',
  styleUrl: './grid-box.component.css'
})
export class GridBoxComponent {
  @Input() item: any;
  active = input<FilterEnum>(FilterEnum.weekly)

  activeTimeframe () {
    return this.item!.timeframes[this.active()]
  }

  determinMetric(hour: number): string {
    return hour > 1 ? `${hour} hrs` : `${hour} hr`
  }
}
