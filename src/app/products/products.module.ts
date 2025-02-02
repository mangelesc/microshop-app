import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddnewPageComponent } from './pages/addnew-page/addnew-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AddnewPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    ProductPageComponent,
    CardComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, MaterialModule],
  exports: [LayoutPageComponent],
})
export class ProductsModule {}
