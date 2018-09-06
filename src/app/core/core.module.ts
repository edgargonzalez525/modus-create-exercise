import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AppService } from './services/app.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';

/**
 * The Core module is used to hold all root-level providers. It should only be imported in the AppModule.
 */
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  declarations: [],
  exports: [],
  /** Place all services/providers/injection tokens here here */
  providers: [
    AppService,
    AuthService,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
