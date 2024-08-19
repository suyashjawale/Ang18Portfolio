import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-search-s',
	standalone: true,
	imports: [],
	templateUrl: './search-s.component.html',
	styleUrl: './search-s.component.scss'
})

export class SearchSComponent {
	
	constructor(private location: Location) { }

	goBackToPrevPage(): void {
		this.location.back();
	}
}
