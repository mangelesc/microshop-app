import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainThemeRoutingModule } from './main-theme-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

@NgModule({
  declarations: [LayoutPageComponent],
  imports: [CommonModule, MainThemeRoutingModule],
  exports:[LayoutPageComponent]
})
export class MainThemeModule {}
