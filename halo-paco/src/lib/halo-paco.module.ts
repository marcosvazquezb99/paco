import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludoDePacoComponent } from './saludo-de-paco/saludo-de-paco.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SaludoDePacoComponent],
  exports: [SaludoDePacoComponent],
})
export class HaloPacoModule {}
