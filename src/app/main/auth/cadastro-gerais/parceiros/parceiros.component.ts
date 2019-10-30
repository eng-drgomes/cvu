import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss']
})
export class ParceirosComponent implements OnInit {

  text = "14px"
  exibir = false;
  formParceiros: FormGroup;
  panelOpenState = false;
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formParceiros = this.formBuilder.group({
      cep           : [null],
      nome          : [null],
      email1        : [null],
      email2        : [null],
      imagem        : [null],
      estado        : [null],
      cidade        : [null],
      numero        : [null],
      segmento      : [null],
      telefone1     : [null],
      telefone2     : [null],
      logadouro     : [null],
      historico     : [null],
      observacao    : [null],
      complemento   : [null],
      responsavel   : [null]
    });
  }

  novoMembro(){
    this.exibir = true;
  }

  cancelar(){
    this.exibir = false;
    this.formParceiros.reset
  }

  salvar() {
    console.log(this.formParceiros.value)
      
	//reseta o form
	this.formParceiros.reset
 
  }


  onFilesAdded(files: File[]) {
    console.log(files);
   
    files.forEach(file => {
      const reader = new FileReader();
   
      reader.onload = (e: ProgressEvent) => {
        const content = (e.target as FileReader).result;
   
        console.log(content);
        this.formParceiros.value.image = file.name;
      };
   
   
      reader.readAsDataURL(file);
    });
  }

  onFilesRejected(files: File[]) {
    console.log(files);
  }

}
