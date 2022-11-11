import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';


export class MyClass {
  constructor(){
    console.log('Nameless call was constructed');
  }
};

export const myCustomToken = new InjectionToken('Test');

const myProvider: Provider = {
  provide: myCustomToken,
  useClass: MyClass,
};


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MyClass,
    myProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
