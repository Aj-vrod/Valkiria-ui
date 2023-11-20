import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { FormComponent } from '../form/form.component'; 

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, CardComponent, FormComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

}
