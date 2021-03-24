import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicios';
  
  public numero1:number;
  public numero2:number;
  public resSuma:number;
  public resProm:number;

  calcular(){
    this.resSuma = this.numero1 + this.numero2;
    this.resProm = this.resSuma / 2;
    
  }
  limpiar(){
    this.numero1 = 0;
    this.numero2 = 0;
  }
}
