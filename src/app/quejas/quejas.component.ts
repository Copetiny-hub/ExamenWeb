import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent implements OnInit {
  /*formu:FormGroup;
  nombre:AbstractControl;
 */
  constructor(/*public fb:FormBuilder*/) { 
   /* this.formu = fb.group({
      nombre:['',[Validators.required,Validators.maxLength(100)]],
      //pais:['',[Validators.required]],
      //obs:['',[Validators.required, Validators.maxLength(200)]]
    })
    this.nombre=this.formu.controls["nombre"];*/
  }

  ngOnInit(): void {
  }

  mensaje(){

  }
}
