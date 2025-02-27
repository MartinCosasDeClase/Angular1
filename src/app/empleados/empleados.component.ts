import { Component, OnInit } from '@angular/core';
 import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  imports: [FormsModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css' 
})
export class EmpleadosComponent implements OnInit {

  nombre="Juan";
  apellido="Diaz";
  edad=18;
  empresa=" ";
  empresa1= "Google"

  habilitacionCuadro=false;

  usuRegistrado=false;

  textoDeRegistro="No hay ningun usuario registrado"

  cambiaEmpresa(event:Event){
    this.empresa = (<HTMLInputElement>event.target).value;
  } 

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }
  setRegistroUsuario(event:Event){
    // alert("El usuario se acaba de registrar")
    // this.textoDeRegistro="El usuario se acaba de registrar"

    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro="No hay ningun usuario registrado";
    }
  
  }

  llamaEmpresa(value:String){
  
  }
  

  constructor(){}

    ngOnInit(): void{
    }
}
