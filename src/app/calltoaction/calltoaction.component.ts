import { Component } from '@angular/core';

import { Juguete } from '../interfaces/juguete';

import { ServicioDatosJuguetesService } from '../providers/servicio-datos-juguetes.service';

@Component({
	selector: 'app-calltoaction',
	templateUrl: './calltoaction.component.html',
	styleUrls: ['./calltoaction.component.css']
})
export class CalltoactionComponent {
	public juguete: Juguete[] = [];
	chartOptions = {};
	chartOptions2 = {};

	constructor(private jugueteProvider: ServicioDatosJuguetesService) { }

	ngOnInit() {
		this.jugueteProvider.getResponse().subscribe((response) => {
			this.juguete = response as Juguete[];
			this.generateCharts();
		});
	}

	generateCharts() {
		const firstFiveData = this.juguete.slice(21, 31);
		this.chartOptions = {
			animationEnabled: true,
			theme: "light",
			exportEnabled: true,
			responsive: true,

			data: [{
				type: "pie",
				indexLabel: "{name}: {y}%",
				dataPoints: firstFiveData.map(countryData => ({ name: countryData.product_name, y: countryData.number_of_reviews })),
			}]
		};
	}
}
