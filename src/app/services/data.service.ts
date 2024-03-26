import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Data } from '../services/data.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>('assets/data.json');
  }
}
