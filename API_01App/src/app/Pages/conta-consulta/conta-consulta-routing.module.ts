import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaPage } from './conta-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaPage
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaConsultaPageRoutingModule {}
