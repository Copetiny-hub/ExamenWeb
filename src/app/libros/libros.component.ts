import { Component, OnInit } from '@angular/core';
import {Libros,ListaLibros,ListaL} from '../interfaces/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  Lista=ListaLibros;
  Lista2=ListaL;
  constructor() { }

  ngOnInit(): void {
  }

}
