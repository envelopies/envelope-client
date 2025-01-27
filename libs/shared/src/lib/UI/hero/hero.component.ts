import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'lib-shared-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button],
})
export class HeroComponent {}
