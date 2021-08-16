import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { FormsModule } from "@angular/forms";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [
    SetupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzInputModule
  ]
})
export class SetupModule { }
