import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FooterComponent,
  HeaderComponent,
  HeroComponent,
  IUser,
} from '@store/shared';
import { CategoryListComponent } from '@store/product';

@Component({
  standalone: true,
  selector: 'lib-shared-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    CategoryListComponent,
    FooterComponent,
  ],
})
export class MainLayoutComponent {
  public sellers: IUser[] = [
    {
      id: 0,
      username: 'литовкин',
      verified: true,
      roles: [],
    },
    {
      id: 1,
      username: 'GHETTO SHOP',
      verified: true,
      roles: [],
    },
    {
      id: 2,
      username: 'Барыга',
      verified: true,
      roles: [],
    },
    {
      id: 3,
      username: '625 Егор',
      verified: true,
      roles: [],
    },
    {
      id: 4,
      username: 'МаксШаверма',
      verified: true,
      roles: [],
    },
  ];
}
