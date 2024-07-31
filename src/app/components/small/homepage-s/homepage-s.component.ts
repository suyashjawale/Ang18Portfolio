import { Component } from '@angular/core';

@Component({
	selector: 'app-homepage-s',
	standalone: true,
	imports: [],
	templateUrl: './homepage-s.component.html',
	styleUrl: './homepage-s.component.scss'
})

export class HomepageSComponent {

	myAge : number[] = [];
	tcsExp : number[] = [];
	systemsEngineerExp : number[] = [];
	attritionDesc : boolean = false;
	switchAgeTab : boolean = false;

	ngOnInit(){
		this.tcsExp = this.calculateDateDifference(new Date("2021-01-21"), new Date());
		this.systemsEngineerExp = this.calculateDateDifference(new Date("2024-01-21"), new Date());
		this.myAge = this.calculateDateDifference(new Date("1999-08-03"), new Date());
	}

	calculateDateDifference(date1: Date, date2: Date) {
		let years = date2.getFullYear() - date1.getFullYear();
		let months = date2.getMonth() - date1.getMonth();
		let days = date2.getDate() - date1.getDate();

		if (days < 0) {
			months--;
			let lastMonth = new Date(date2.getFullYear(), date2.getMonth(), 0);
			days = lastMonth.getDate() - date1.getDate() + date2.getDate();
		}

		if (months < 0) {
			years--;
			months += 12;
		}
		return [years, months, days];
	}

}
