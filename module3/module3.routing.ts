import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component3Component } from './component3/component3.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild([{path:'',component:Component3Component}])
  ]
  
})
export class ModuleRouting3Module { }
