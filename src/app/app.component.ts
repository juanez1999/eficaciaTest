import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule si no es standalone
import { BaseCardComponent } from './base-card/base-card.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		CommonModule,
		RouterModule,
		IonicModule, // Solo necesario si usas componentes Ionic directamente
		BaseCardComponent,
	],
	template: `
		<ion-app>
			<ion-router-outlet></ion-router-outlet>
			<base-card-app></base-card-app>
		</ion-app>
	`,
})
export class AppComponent {}
