import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardFormComponent } from './core/components/card-form/card-form.component';
import { InputComponent } from './core/components/input/input.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CardFormComponent, InputComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
