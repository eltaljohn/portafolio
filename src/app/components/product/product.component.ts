import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// Servicios
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent {

  producto:any = undefined;
  cod:string = undefined;

  constructor( private route: ActivatedRoute,
               private _ps: ProductosService) {

    route.params.subscribe( parametros => {
      // console.log( parametros );
      // console.log( parametros['id'] );

      this._ps.cargar_producto( parametros['id'] )
              .subscribe( data => {
                // console.log( data.json() );
                this.cod = parametros['id'];
                this.producto =  data.json();
                // console.log( this.producto );
              });
    });

  }



}
