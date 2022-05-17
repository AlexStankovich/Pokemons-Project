import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './widgets/card/card.component';
import { CardsViewComponent } from './pages/cards-view/cards-view.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ConfirmationPopupComponent } from './widgets/popup/confirmation-popup/confirmation-popup.component';
import { MatTableModule } from '@angular/material/table';
import { TableViewComponent } from './pages/table-view/table-view.component';
import { MatIconModule } from '@angular/material/icon';
import { AddPokemonPopupComponent } from './widgets/popup/add-pokemon-popup/add-pokemon-popup.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionItemComponent } from './widgets/accordion-item/accordion-item.component';
import { AccordionViewComponent } from './pages/accordion-view/accordion-view.component';
import { CustomAccordionComponent } from './widgets/custom-accordion/custom-accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsViewComponent,
    HeaderComponent,
    ConfirmationPopupComponent,
    TableViewComponent,
    AddPokemonPopupComponent,
    AccordionItemComponent,
    AccordionViewComponent,
    CustomAccordionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
