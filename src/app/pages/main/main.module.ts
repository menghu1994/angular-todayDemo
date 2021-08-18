import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LeftControlComponent } from './left-control/left-control.component';

import { MainRoutingModule } from './main-routing.module'

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    MainComponent,
    LeftControlComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    MainRoutingModule,
    NzButtonModule,
    NzIconModule
  ]
})
export class MainModule { }
