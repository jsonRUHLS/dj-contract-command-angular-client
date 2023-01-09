import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContractFormComponent } from './contract-form/contract-form.component';


@NgModule({
  declarations: [
    ContractFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ContractsModule { }
