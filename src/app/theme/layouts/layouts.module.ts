import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavigationComponent
  ],
  declarations: [
    NavigationComponent
  ],

})
export class LayoutsModule { }
