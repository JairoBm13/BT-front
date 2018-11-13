import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FugaModule } from './fuga/fuga.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    FugaModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
