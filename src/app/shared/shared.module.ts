import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { MaterialModule } from './material.module';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

const SHARED_MODULES: any[] = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  MaterialModule,
];

const SHARED_COMPONENTS: any[] = [
  AppHeaderComponent,
  AppContentComponent,
  LoadingSpinnerComponent,
];

/**
 * The shared module is used to hold all reusable components across the app's
 * different modules. It imports and exports reusable modules to make them
 * readily available to other feature modules just by importing the shared
 * module, avoiding repetition. Since the shared module is meant to be imported
 * by all feature-modules, it shouldn't provide any service.
 */
@NgModule({
  imports: SHARED_MODULES,
  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS
  ],
  declarations: [
    ...SHARED_COMPONENTS
    /** Add components here if necessary */
  ]
  /** Do not provide services here, do it in core.module */
})
export class SharedModule {}
