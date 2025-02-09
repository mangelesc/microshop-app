import { NgModule } from '@angular/core';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import {
  MainmenuComponent,
  PublicMenuComponent,
} from './components/menu-components/public-menu/public-menu.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminMenuComponent } from './components/menu-components/admin-menu/admin-menu.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    NotfoundPageComponent,
    PublicMenuComponent,
    SearchBarComponent,
    AdminMenuComponent,
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
  ],
})
export class SharedModule {}
