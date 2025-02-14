import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@store/shared';
import { HeroComponent } from '../../UI/hero/hero.component';
import { CategoryListComponent } from '@store/product';

@Component({
  standalone: true,
  selector: 'lib-shared-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent, HeroComponent, CategoryListComponent],
})
export class MainLayoutComponent {}
