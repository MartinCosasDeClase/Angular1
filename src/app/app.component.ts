import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoComponent } from "./empleado/empleado.components";

@Component({
  selector: 'app-raiz',
  imports: [RouterOutlet, EmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MiPrimeraApp';

  saludo= 'Hola alumnos de 2DAM, Que tal estais'
}
