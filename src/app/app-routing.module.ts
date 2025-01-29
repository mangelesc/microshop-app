import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundPageComponent } from './shared/pages/notfound-page/notfound-page.component';
import { LayoutPageComponent } from './main-theme/pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    // Cargar menienta lazyload
    component: LayoutPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth',
    // Cargar menienta lazyload
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: '404',
    component: NotfoundPageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
