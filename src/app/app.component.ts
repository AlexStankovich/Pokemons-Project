import { Component } from '@angular/core';
import { Pokemon } from './models/pokemon';
import { ApiService } from './services/api.service';
import { ConstService } from './services/const.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private apiService: ApiService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.loadFromLocalStorage();
  }
}
