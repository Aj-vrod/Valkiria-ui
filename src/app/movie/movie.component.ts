import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { FormComponent } from '../form/form.component'; 
import { Movie, MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, CardComponent, FormComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  movie: Movie = {id: 0, name: '', genre: ''}

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getMovie().subscribe(resp => this.movie = resp)
    console.log(">>>>ngOnInit")
  }
}
