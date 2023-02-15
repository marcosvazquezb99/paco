import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import {PacoSaludaModule} from "@abacus-consulting/paco";

@Component({
  standalone: true,
    imports: [NxWelcomeComponent, RouterModule, PacoSaludaModule],
  selector: 'paco-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'paco';
}
