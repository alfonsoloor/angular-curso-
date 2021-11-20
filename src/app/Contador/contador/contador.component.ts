import {Component} from '@angular/core'

@Component({
    selector:'app-contador',
    template: `
            <!-- <h1>{{titulo}}</h1>

            <button (click)="acumular(+1)"> +1 </button>

            <span> {{numero}} </span>

            <button (click)="acumular(-1)"> -1 </button> -->

            <h1>Base de 5 en 5, esto lo programo en App.component.ts</h1>

            <button (click)="acumulador(+5)">+5</button>
            <h3>La base es: {{inicial}} </h3>
            <button (click)="acumulador(-5)">-5</button>
                
    `
})


export class ContadorComponent{
    public titulo: string = 'Contador realizando desde app.component.ts';
    public numero: number = 10;
    public inicial : number = 55;
   
    sumar(){
      this.numero+=1;
    }
    restar(){
      this.numero-=1;
    }
    acumular(valor: number){
      this.numero +=valor;
    }
    acumulador(base:number){
      this.inicial+=base;
    }
}