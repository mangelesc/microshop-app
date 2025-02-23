import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedModule } from '../../shared/shared.module';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { CreateCartPageComponent } from './pages/create-cart-page/create-cart-page.component';
import { CreateUserPageComponent } from './pages/create-user-page/create-user-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    CreateProductPageComponent,
    CreateCartPageComponent,
    CreateUserPageComponent,
    ListPageComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
