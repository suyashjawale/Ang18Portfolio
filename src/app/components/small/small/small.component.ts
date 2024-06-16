import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarSComponent } from '../navbar-s/navbar-s.component';

@Component({
  selector: 'app-small',
  standalone: true,
  imports: [RouterOutlet,NavbarSComponent],
  templateUrl: './small.component.html',
  styleUrl: './small.component.scss'
})
export class SmallComponent {

}
