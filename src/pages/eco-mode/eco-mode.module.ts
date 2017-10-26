import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EcoModePage } from './eco-mode';

@NgModule({
  declarations: [
    EcoModePage,
  ],
  imports: [
    IonicPageModule.forChild(EcoModePage),
  ],
})
export class EcoModePageModule {}
