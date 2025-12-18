import { Component } from '@angular/core';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { CertificadoFormComponent } from './pages/certificado-form/certificado-form.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { CertiicadoComponent } from './pages/certiicado/certiicado.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    BaseUiComponent,
    CertificadosComponent,
    CertificadoFormComponent,
    CertiicadoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gerador-certificado';
}
