import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListProductsPageComponent } from './pages/list-products-page/list-products-page.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    LayoutPageComponent,
    ListProductsPageComponent,
    ProductDetailPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    PublicRoutingModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [LayoutPageComponent],
})
export class PublicModule {}
