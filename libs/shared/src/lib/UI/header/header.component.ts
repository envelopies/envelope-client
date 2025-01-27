import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { Button } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'lib-shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconField, InputIcon, InputText, Button],
})
export class HeaderComponent {}
