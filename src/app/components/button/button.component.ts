import { Component, EventEmitter, Input, Output, WritableSignal, input, signal } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FilterEnum } from '../navigation/services/data.types';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() title: string = '';
  @Output() onSetFilter: EventEmitter<FilterEnum> = new EventEmitter<FilterEnum>();
  active = input<FilterEnum>(FilterEnum.weekly);

  setFilter(event: Event): void {
    const filterString = (event.target as HTMLButtonElement).value;
    const filterEnumValue: FilterEnum = FilterEnum[filterString as keyof typeof FilterEnum];
    this.onSetFilter.emit(filterEnumValue);
  }
}
