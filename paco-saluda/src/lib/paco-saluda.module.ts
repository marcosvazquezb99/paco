import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolaPacoComponent } from './hola-paco/hola-paco.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HolaPacoComponent],
  exports: [
    HolaPacoComponent
  ]
})
export class PacoSaludaModule {

}
