import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: 'body.component.html'
})

export class BodyComponent{

    nombre:string = 'Jacobo';

    mostrar:boolean = false;

    frase:any = {
        autor:  "Jacobo",
        mensaje: "Chinga tu madre"
    }

    personajes:string[] = ["Spiderman","Venoso","Octopulpo"]


}
