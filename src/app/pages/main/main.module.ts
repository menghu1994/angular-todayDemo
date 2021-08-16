import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LeftControlComponent } from './left-control/left-control.component';

@NgModule({
  declarations: [
    MainComponent,
    LeftControlComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule
  ]
})
export class MainModule { }
