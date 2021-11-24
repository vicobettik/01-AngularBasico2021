import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];
  heroesBorrados: string[] = [];

  borrarHeroe(){
    this.heroesBorrados.push(this.heroes.shift() || '');
  }

}
