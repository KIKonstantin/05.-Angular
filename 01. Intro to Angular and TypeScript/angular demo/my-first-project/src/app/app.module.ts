import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

export class MyClass {
  constructor() {
    console.log('Nameless call was constructed');
  }
};





@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AuthModule
  ],
  providers: [
    MyClass,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
