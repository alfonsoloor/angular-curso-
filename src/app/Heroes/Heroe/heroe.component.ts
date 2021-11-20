import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    public titulo: string='Heroes'
    public nombre: string = 'Iroman';
    public edad: number = 18;
    
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return`${this.nombre} - ${this.edad}`;

    }

    CambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    CambiarEdad():void{
        this.edad=35;
    }
}