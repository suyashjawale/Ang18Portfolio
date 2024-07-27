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

	isFullScreen : boolean = false;

	toggleFullScreen() {
		const element: any = document.documentElement;
		if(this.isFullScreen){
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if ((document as any).mozCancelFullScreen) { // Firefox
				(document as any).mozCancelFullScreen();
			} else if ((document as any).webkitExitFullscreen) { // Chrome, Safari and Opera
				(document as any).webkitExitFullscreen();
			} else if ((document as any).msExitFullscreen) { // IE/Edge
				(document as any).msExitFullscreen();
			}
			this.isFullScreen=false;
		}
		else{
			if (element.requestFullscreen) {
				element.requestFullscreen();
			} else if (element.mozRequestFullScreen) { // Firefox
				element.mozRequestFullScreen();
			} else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
				element.webkitRequestFullscreen();
			} else if (element.msRequestFullscreen) { // IE/Edge
				element.msRequestFullscreen();
			}
			this.isFullScreen = true;
		}
	}

}
