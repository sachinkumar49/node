import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { HttpClientModule } from '@angular/common/http';
import {KeyFilterModule} from 'primeng/keyfilter';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorDirective } from './form-validation/error.directive';

@NgModule({
  imports: [ BrowserModule,FormsModule,HttpClientModule,KeyFilterModule,ReactiveFormsModule],
  declarations: [ AppComponent, FormValidationComponent, ErrorDirective],
  bootstrap: [ AppComponent, ]
})
export class AppModule {
  constructor() {}

}

