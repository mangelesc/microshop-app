import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'products/add-product',
        component: ListPageComponent,
      },
      {
        path: 'products/view-products',
        component: ListPageComponent,
      },
      {
        path: 'products/view-categories',
        component: ListPageComponent,
      },
      {
        path: 'users/view-users',
        component: ListPageComponent,
      },
      {
        path: 'shopping/view-shopping',
        component: ListPageComponent,
      },
      // { path: 'add-product', component: AddnewPageComponent },
      // { path: 'edit-product', component: AddnewPageComponent },
      // { path: 'edit/:id', component: AddnewPageComponent },
      // { path: ':id', component: ProductPageComponent },
      { path: '**', redirectTo: 'products/add-product' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
