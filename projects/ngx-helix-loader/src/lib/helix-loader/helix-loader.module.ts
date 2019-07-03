import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelixLoaderComponent } from './helix-loader.component';

@NgModule({
  declarations: [
    HelixLoaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelixLoaderComponent,
  ],
})
export class HelixLoaderModule { }
