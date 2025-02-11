import { NgModule } from '@angular/core';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { PublicMenuComponent } from './components/menu-components/public-menu/public-menu.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminMenuComponent } from './components/menu-components/admin-menu/admin-menu.component';
import { CoreModule } from '../core/core.module';
import { CardComponent } from './components/card/card.component';
import { ProductTitlePipe } from './pipes/product-title.pipe';
import { ProductImagePipe } from './pipes/product-image.pipe';
import { CustomImagePipe } from './pipes/custom-image.pipe';
import { AdminMenuBarComponent } from './components/menu-components/admin-menu/components/admin-menu-bar/admin-menu-bar.component';
import { AdminMenuSidebarComponent } from './components/menu-components/admin-menu/components/admin-menu-sidebar/admin-menu-sidebar.component';

@NgModule({
  declarations: [
    NotfoundPageComponent,
    PublicMenuComponent,
    SearchBarComponent,
    AdminMenuComponent,
    CardComponent,
    AdminMenuBarComponent,
    AdminMenuSidebarComponent,

    ProductTitlePipe,
    ProductImagePipe,
    CustomImagePipe,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    NotfoundPageComponent,
    PublicMenuComponent,
    SearchBarComponent,
    AdminMenuComponent,
    CardComponent,

    ProductTitlePipe,
    ProductImagePipe,
    CustomImagePipe,
  ],
})
export class SharedModule {}
