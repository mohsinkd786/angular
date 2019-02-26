import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SqrootPipe } from './sqroot.pipe';
import { SquarePipe } from './square.pipe';
import { PowerPipe } from './power.pipe';
import { BgcolorDirective } from './bgcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SqrootPipe,
    SquarePipe,
    PowerPipe,
    BgcolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
