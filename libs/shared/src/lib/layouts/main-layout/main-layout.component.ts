import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@store/shared';
import { HeroComponent } from '../../UI/hero/hero.component';

@Component({
  standalone: true,
  selector: 'lib-shared-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent, HeroComponent],
})
export class MainLayoutComponent {}
