import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { RouterModule } from '@angular/router';
import { DataService } from './data.service';

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, EmployeeDetailComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'emp-list',
        component: EmployeeListComponent,
      },
      {
        path: 'emp-details',
        component: EmployeeDetailComponent,
      },
    ]),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
