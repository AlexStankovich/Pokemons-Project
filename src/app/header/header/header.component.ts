import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { DataService } from 'src/app/services/data.service';
import { AddPokemonPopupService } from 'src/app/services/dialog/add-pokemon-popup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private addPokemonPopupService: AddPokemonPopupService,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  addPokemon() {
    this.addPokemonPopupService.openPopup().subscribe((x) => {
      this.dataService.addNewPokemon(x);
    });
  }

  tabelarView(): void {
    this.router.navigate(['tabelar-view']);
  }
  cardsView(): void {
    this.router.navigate(['cards-view']);
  }

  accordionView(): void {
    this.router.navigate(['accordion-view']);
  }
}
