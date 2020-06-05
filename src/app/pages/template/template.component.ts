import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  nombre: string;
  persona = {
    nombre: '',
    apellido: '',
    cliente: '',
    vacaciones: false
  };
  constructor() { }

  ngOnInit(): void {
  }

  guardar(formulario) {
    console.log(formulario);
    if(formulario.form.invalid) {
      console.log('El formulario es invalido');
      return;
    } else {
      console.log('El formulario es valido');
    }
    
  }

}
