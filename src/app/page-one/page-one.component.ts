import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-one',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-one.component.html',
  styleUrl: './page-one.component.css',
})
export class PageOneComponent {}
