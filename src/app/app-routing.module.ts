import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionViewComponent } from './pages/accordion-view/accordion-view.component';
import { CardsViewComponent } from './pages/cards-view/cards-view.component';
import { TableViewComponent } from './pages/table-view/table-view.component';
import { ConstService } from './services/const.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ConstService.cards
  },
  { path: ConstService.cards, component: CardsViewComponent },
  { path: ConstService.table, component: TableViewComponent },
  { path: ConstService.accordion, component: AccordionViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
