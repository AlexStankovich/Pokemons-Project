import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionViewComponent } from './pages/accordion-view/accordion-view.component';
import { CardsViewComponent } from './pages/cards-view/cards-view.component';
import { TableViewComponent } from './pages/table-view/table-view.component';
import { AccordionItemComponent } from './widgets/accordion-item/accordion-item.component';
import { CustomAccordionComponent } from './widgets/custom-accordion/custom-accordion.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cards-view',
  },
  { path: 'cards-view', component: CardsViewComponent },
  { path: 'tabelar-view', component: TableViewComponent },
  { path: 'accordion-item', component: AccordionItemComponent },
  { path: 'accordion-view', component: AccordionViewComponent },
  { path: 'custom-accordion', component: CustomAccordionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
