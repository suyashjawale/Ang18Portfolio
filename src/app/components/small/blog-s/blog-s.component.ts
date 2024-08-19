import { Component } from '@angular/core';
import { NavbarSComponent } from '../navbar-s/navbar-s.component';

@Component({
  selector: 'app-blog-s',
  standalone: true,
  imports: [NavbarSComponent],
  templateUrl: './blog-s.component.html',
  styleUrl: './blog-s.component.scss'
})
export class BlogSComponent {

}
