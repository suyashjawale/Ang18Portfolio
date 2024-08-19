import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { MsideBarComponent } from '../mside-bar/mside-bar.component';

@Component({
  selector: 'app-small',
  standalone: true,
  imports: [RouterOutlet,MsideBarComponent],
  templateUrl: './small.component.html',
  styleUrl: './small.component.scss'
})

export class SmallComponent {
}
