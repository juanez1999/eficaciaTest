import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMomentosComponent } from '../components/header/header-momentos/header-momentos.component';
import { InputComponent } from '../components/input/input.component';
import { DropdownMenuComponent } from '../components/dropdown-menu/dropdown-menu.component';
import { CheckboxTextComponent } from '../components/Checkbox/CheckboxText/CheckboxText.component';
import { ButtonComponent } from '../components/button/button.component';

@Component({
	selector: 'base-card-app',
	standalone: true,
	imports: [
		CommonModule,
		HeaderMomentosComponent,
		InputComponent,
		DropdownMenuComponent,
		CheckboxTextComponent,
		ButtonComponent,
	],
	templateUrl: './base-card.component.html',
	styleUrls: ['./base-card.component.scss'],
})
export class BaseCardComponent {}
