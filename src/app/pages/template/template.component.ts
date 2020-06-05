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

}
