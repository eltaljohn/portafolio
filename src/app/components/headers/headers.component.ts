import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

// Servicios
import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html'
})
export class HeadersComponent  {

  constructor( public _is: InformacionService, 
               private router:Router){
    
  }

  buscar_producto( termino:string){
    // console.log( termino );
    this.router.navigate( ['buscar', termino] );
  }

}
