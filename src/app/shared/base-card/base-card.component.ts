import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GhibliFilm } from '../../services/ghibli.service';

@Component({
  selector: 'app-base-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss'],
})
export class BaseCardComponent {
  @Input({ required: true }) film!: GhibliFilm;
  @Output() select = new EventEmitter<string>();

  onSelect(): void {
    this.select.emit(this.film.id);
  }
}
