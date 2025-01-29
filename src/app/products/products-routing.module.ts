import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AddnewPageComponent } from './pages/addnew-page/addnew-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: '', component: ListPageComponent, pathMatch: 'full' },
      { path: 'add-new', component: AddnewPageComponent },
      { path: 'edit/:id', component: AddnewPageComponent },
      { path: ':id', component: ProductPageComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
