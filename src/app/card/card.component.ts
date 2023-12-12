import { Component, Input } from '@angular/core';
import { Movie } from '../movie/movie.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() movie: Movie =  {
    id: 0,
    name: "Matrix",
    genre: "sci-fi"
  }
}
