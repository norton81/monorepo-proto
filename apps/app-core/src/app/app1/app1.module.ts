import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1Component } from "./app1.component";
import { App1RotingModule } from "./app1-routing.module";
import { Feature3Component } from './feature3/feature3.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Feature1Component} from "./feature1/feature1.component";
import {Feature1Module} from "./feature1/feature1.module";
import {Feature2Module} from "./feature2/feature2.module";
import {Feature3Module} from "./feature3/feature3.module";

@NgModule({
  imports: [
    CommonModule,
    App1RotingModule,
    FormsModule,
    ReactiveFormsModule,
    Feature1Module,
    Feature2Module,
    Feature3Module,
  ],
  declarations: [App1Component]
})
export class App1Module { }
