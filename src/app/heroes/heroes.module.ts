import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent  
       /* qUE COSAS QUIERO HACER PUBLICAS fuera de ste modulo
       */
    ],
    imports:[
        CommonModule
    ]

})
export class HeroesModule {}