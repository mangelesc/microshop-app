import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListProductsPageComponent } from './pages/list-products-page/list-products-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      // { path: '', component: HomePageComponent, pathMatch: 'full' },
      {
        path: '',
        component: ListProductsPageComponent,
        pathMatch: 'full',
      },
      { path: ':id', component: ProductDetailPageComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
