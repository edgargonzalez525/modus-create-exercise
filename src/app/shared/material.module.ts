import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';

const MATERIAL_MODULES: any[] = [
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatButtonModule,
];

@NgModule({
  imports: [
    ...MATERIAL_MODULES,
  ],
  exports: [
    ...MATERIAL_MODULES,
  ],
})
export class MaterialModule {}
