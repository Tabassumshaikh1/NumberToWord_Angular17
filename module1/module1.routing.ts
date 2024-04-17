import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild([{path:'',component:Component1Component}])
  ]
  
})
export class ModuleRouting1Module { }
