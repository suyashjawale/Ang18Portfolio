import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-s',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-s.component.html',
  styleUrl: './navbar-s.component.scss'
})
export class NavbarSComponent {

  makeFullScreen() {
    document.documentElement.requestFullscreen();
  }

  userAddress: string = "";

}
