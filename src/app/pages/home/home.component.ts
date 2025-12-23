import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

import { GhibliFilm, GhibliService } from '../../services/ghibli.service';
import { BaseCardComponent } from '../../shared/base-card/base-card.component';
import { BaseGridComponent } from '../../shared/base-grid/base-grid.component';

type ViewMode = 'cards' | 'table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    BaseCardComponent,
    BaseGridComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('listAnim', [
      transition(':enter', [
        query(
          '.anim-item',
          [
            style({ opacity: 0, transform: 'translateY(8px)' }),
            stagger(
              40,
              animate(
                '220ms ease-out',
                style({ opacity: 1, transform: 'none' })
              )
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  loading = true;
  viewMode: ViewMode = 'cards';
  films: GhibliFilm[] = [];

  constructor(private ghibli: GhibliService, private router: Router) {
    this.ghibli.getFilms().subscribe((data) => {
      // Optional (allowed): enrich if you want extra fields later
      this.films = data.map((f, idx) => ({
        ...f,
        localRating: (idx % 5) + 1,
        watchStatus: idx % 2 === 0 ? 'Watched' : 'Not watched',
      }));
      this.loading = false;
    });
  }

  setMode(mode: ViewMode): void {
    this.viewMode = mode;
  }

  goDetail(id: string): void {
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
