import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from '@store/shared';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public title = 'client';
}
