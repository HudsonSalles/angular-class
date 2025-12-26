import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Certificado } from '../../_components/interfaces/certificado';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { CertificadoService } from './../../_services/certificado.service';

@Component({
  selector: 'app-certificado-form',
  imports: [
    SecondaryButtonComponent,
    PrimaryButtonComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css',
})
export class CertificadoFormComponent {
  constructor(private certificadoService: CertificadoService) {}

  ativade: string = '';
  certificado: Certificado = {
    nome: '',
    atividades: [],
    dataEmissao: '',
  };

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValido() {
    return (
      this.certificado?.nome.length > 0 &&
      this.certificado?.atividades.length > 0
    );
  }

  adicionarAtividade() {
    if (this.ativade.length > 0) {
      this.certificado.atividades.push(this.ativade);
      this.ativade = '';
    }
  }

  removerAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  submit() {
    if (!this.formValido()) {
      return;
    }
    this.certificado = {
      nome: this.certificado.nome,
      atividades: this.certificado.atividades,
      dataEmissao: this.dataAtual(),
    };
    this.certificadoService.adicionarCertificado(this.certificado);
  }

  dataAtual(): string {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }
}
