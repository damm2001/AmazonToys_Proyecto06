import { Component } from '@angular/core';
import { ServicioDatosJuguetesService } from '../providers/servicio-datos-juguetes.service';
import { Juguete } from '../interfaces/juguete';

@Component({
  selector: 'app-calltoaction',
  templateUrl: './calltoaction.component.html',
  styleUrls: ['./calltoaction.component.css']
})
export class CalltoactionComponent {
  /*public juguete: Juguete[] = []; 
	chartOptions = {};
	chartOptions2 = {};

	constructor(private jugueteProvider: ServicioDatosJuguetesService ) { }

	ngOnInit() {
		this.jugueteProvider.getResponse().subscribe((response) => {
			this.juguete = response as Juguete[];
			this.generateCharts();
		});
	}

	generateCharts() {
		const juguetes_price = this.juguete.slice(0, 3);
		const juguetes_reviews = this.juguete.slice(1, 2);
		this.chartOptions = {
			animationEnabled: true,
			theme: "dark2",
			exportEnabled: true,
			juguete: [{
				type: "pie",
				indexLabel: "{name}: {y}%",
				juguetePoints: juguetes_price.map(juguetes => ({ name:juguetes.product_name, y: juguetes.price })),
			}]
		};

		this.chartOptions2 = {
			theme: "dark2",
			exportEnabled: true,
			juguete: [{
				type: "bar",
				indexLabel: "{y}",
				juguetePoints: juguetes_reviews.map(juguetes => ({ label: juguetes.product_name, y:juguetes.number_of_reviews })),
			}]
		};
	}*/
}
