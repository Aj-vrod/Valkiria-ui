import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  movie =  {
    id: 0,
    name: "Matrix",
    genre: "sci-fi"
  }
}
