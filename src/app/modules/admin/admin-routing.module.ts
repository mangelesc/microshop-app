import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'products/add-product',
        component: CreateProductPageComponent,
      },
      // { path: 'add-product', component: AddnewPageComponent },
      // { path: 'edit-product', component: AddnewPageComponent },
      // { path: 'edit/:id', component: AddnewPageComponent },
      // { path: ':id', component: ProductPageComponent },
      // { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
