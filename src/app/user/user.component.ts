import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  // vamos a usar otro modo de introducir datos de forma dinámica (con señales) para eso importamos "input" y hacemos alguna cosa mas 
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  })

  //lo hemos puesto todo así porque lo hemos pasado todo a señales y hemos de cambiar los metodos de llamada a la clase
  //como dice que lo de las señales es muy nuevo en el proyecto lo quiere dejar con los @Inputs que son decoradores. hago commit para guardar esto

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser() {}
}
