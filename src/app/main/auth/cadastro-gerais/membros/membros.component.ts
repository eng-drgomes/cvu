import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import * as moment from 'moment';




@Component({
  selector: "membros",
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.scss']
})
export class MembrosComponent implements OnInit {

  text = "14px"
  exibir = false;
  formMembros: FormGroup;
  events: string[] = [];

  constructor(private formBuilder: FormBuilder) { } 

  ngOnInit() {

    this.formMembros = this.formBuilder.group({
      cpf                 : [null],
      cep                 : [null],
      curso               : [null],
      nome                : [null],
      email               : [null],
      estado              : [null],
      periodo             : [null],
      cidade              : [null],
      numero              : [null],
      logadouro           : [null],
      diretoria           : [null],
      telefone2           : [null],
      telefone1           : [null],
      entradaCvu          : [null],
      complemento         : [null],
      grupoUsuario        : [null],
      dataNascimento      : [null],
      instituicaoEnsino   : [null],
      previsaoFormatura   : [null]
    });
    
  }  

  addEvent(type: string, event: MatDatepickerInputEvent<Date>, campo) {
    this.events.push(`${type}: ${event.value}`);

    let formatDate = moment(event.value).format('DD/MM/YYYY');

    switch (campo) {
      case "dataNascimento":
        this.formMembros.value.dataNascimento = formatDate;
        break;
      case "previsaoFormatura":
        this.formMembros.value.previsaoFormatura = formatDate;
        break;
      case "entradaCvu":
        this.formMembros.value.entradaCvu = formatDate;
        break;
    }
    this.events = [];
  }

  novoMembro(){
    this.exibir = true;
  }

  cancelar(){
    this.exibir = false;
    this.formMembros.reset
  }

  salvar() {
    console.log(this.formMembros.value)
      
	//reseta o form
	this.formMembros.reset
 
  }


}