import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component2Component } from './component2/component2.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild([{path:'',component:Component2Component}])
  ]
  
})
export class ModuleRouting2Module { }
