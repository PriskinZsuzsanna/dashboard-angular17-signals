import { Component, inject, signal, Signal, WritableSignal } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';
import { GridBoxComponent } from './components/grid-box/grid-box.component';
import { DataService } from './components/navigation/services/data.service';
import { FilterEnum } from './components/navigation/services/data.types';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridBoxComponent,ButtonComponent, NavigationComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private DataService = inject(DataService);
  active: WritableSignal<FilterEnum> = signal(FilterEnum.weekly);
  filterOptions = ['daily', 'weekly', 'monthly'];
  dataSig: Signal<Data[]> = toSignal(
    this.DataService.getData(), { initialValue: [] }
  );

  setFilter(filterEnumValue: FilterEnum) {
    this.active.set(filterEnumValue);
  }
}
