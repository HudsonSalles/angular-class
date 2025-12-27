import { Injectable } from '@angular/core';
import { Certificado } from '../_components/interfaces/certificado';

@Injectable({
  providedIn: 'root',
})
export class CertificadoService {
  certificados: Certificado[] = [];

  constructor() {}

  adicionarCertificado(certificado: Certificado) {
    this.certificados.unshift({ ...certificado });
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
    console.log(this.certificados);
  }
}
