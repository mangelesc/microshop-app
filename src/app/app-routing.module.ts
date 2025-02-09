import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundPageComponent } from './shared/pages/notfound-page/notfound-page.component';

const routes: Routes = [
  // {
  //   path: 'products',
  //   loadChildren: () =>
  //     import('./products/products.module').then((m) => m.ProductsModule),
  // },
  // {
  //   path: 'auth',
  //   // Cargar menienta lazyload
  //   loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  // },
  // {
  //   path: 'admin',
  //   // Cargar menienta lazyload
  //   loadChildren: () =>
  //     import('./admin/admin.module').then((m) => m.AdminModule),
  // },
  {
    path: '404',
    component: NotfoundPageComponent,
  },
  {
    path: '',
    // Cargar menienta lazyload
    redirectTo: 'products',
    pathMatch: 'full',
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
