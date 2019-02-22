import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { SwitchcaseComponent } from './switchcase/switchcase.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UserComponent,
    TableComponent,
    SwitchcaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
