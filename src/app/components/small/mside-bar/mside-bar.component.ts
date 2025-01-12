import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { trigger, transition, state, animate, style, AnimationEvent, sequence } from '@angular/animations';

@Component({
  selector: 'app-mside-bar',
  standalone: true,
    animations :[
	  trigger('myAnimation', [
		transition('* => *', [
		  sequence([
			style({ transform: 'translateX(-100%)', opacity: 0 }),
			animate('1s ease-in', style({ transform: 'translateX(0%)', opacity: 1 })), 
			animate('6s', style({})),
			animate('1s ease-out', style({ transform: 'translateX(-100%)', opacity: 0 })) 
		  ])
		])
	  ])
	],
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mside-bar.component.html',
  styleUrl: './mside-bar.component.scss'
})
export class MsideBarComponent {

	isFullScreen : boolean = false;
	currentHighlight : number = 0;
	isOpen : boolean = false;
	highLights : string[] = [
		"🎉 🥳 Happy Birthday Rushikesh",
		"🎉 🥳 Happy Birthday Trisha",
		"🎉 🥳 Happy Birthday Kashish",
		"Mercury rise and set in Pune Fairly close to the Sun. Visible only before sunrise and/or after sunset."
	]

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

	animationDone(event: AnimationEvent) {
		this.currentHighlight = this.currentHighlight==this.highLights.length? 0 : this.currentHighlight+=1;		
		this.isOpen = !this.isOpen;
	}
	
	ngOnInit(){
		this.isOpen = true;
	}
}