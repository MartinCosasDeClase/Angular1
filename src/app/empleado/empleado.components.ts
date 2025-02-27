import { Component } from "@angular/core";
import { EmpleadosComponent } from "../empleados/empleados.component";

@Component({
    selector: "app-empleado",
    templateUrl: "./empleado.component.html",
    styleUrls: ['./empleado.component.css'],
    imports: [EmpleadosComponent],

})

export class EmpleadoComponent{
}