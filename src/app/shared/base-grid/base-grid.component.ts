import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { GhibliFilm } from '../../services/ghibli.service';

@Component({
  selector: 'app-base-grid',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './base-grid.component.html',
  styleUrls: ['./base-grid.component.scss'],
})
export class BaseGridComponent {
  @Input({ required: true }) films: GhibliFilm[] = [];
  @Output() select = new EventEmitter<string>();

  displayedColumns: string[] = [
    'title',
    'director',
    'release_date',
    'rt_score',
  ];

  onRowClick(id: string): void {
    this.select.emit(id);
  }
}
