import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css',
})
export class ItemCertificadoComponent {
  id: string = '1';

  constructor(private router: Router) {}

  redirecionaCertificado(id: string) {
    this.router.navigate(['/certificados', id]);
  }
}
