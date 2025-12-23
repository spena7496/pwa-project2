import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { GhibliFilm, GhibliService } from '../../services/ghibli.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [MatButtonModule, MatExpansionModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  film: GhibliFilm | null = null;
  showAll = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ghibli: GhibliService
  ) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.ghibli.getFilmById(id).subscribe((data) => {
      this.film = data;
    });
  }

  back(): void {
    this.router.navigateByUrl('/home');
  }

  toggleAll(): void {
    this.showAll = !this.showAll;
  }
}
