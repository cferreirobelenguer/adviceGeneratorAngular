import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LlamadaAvisosComponent } from './components/llamada-avisos/llamada-avisos.component';

@NgModule({
  declarations: [
    AppComponent,
    LlamadaAvisosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
