import { Component } from '@angular/core';
import { NavbarSComponent } from '../navbar-s/navbar-s.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects-s',
  standalone: true,
  imports: [NavbarSComponent, RouterLink],
  templateUrl: './projects-s.component.html',
  styleUrl: './projects-s.component.scss'
})
export class ProjectsSComponent {

}
