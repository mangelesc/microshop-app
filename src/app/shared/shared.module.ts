import { NgModule } from '@angular/core';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotfoundPageComponent, MainmenuComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NotfoundPageComponent, MainmenuComponent],
})
export class SharedModule {}
