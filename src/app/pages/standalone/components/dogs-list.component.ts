import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsService } from 'src/app/services/dogs.service';
import { DogsListCardComponent } from './dogs-list-card.component';

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [CommonModule, DogsListCardComponent],
  template: `
    <nav>
      <div>
        <a><img class="logo" src="assets/dog-walker-logo.svg"/></a>
        <h1 class="title">Walk My Dog</h1>
      </div>
    </nav>
    <section class="hero-section">
      <h2 class="hero-text">Discover Pets to walk near you</h2>
    </section>
    <article class="pet-list">
      <app-dogs-list-card
        *ngFor="let dog of dogsService.dogs; let i = index"
        [index]="i"
        [dog]="dog"
      ></app-dogs-list-card>
    </article>
  `,
  styles: [
    `
      .pet-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 10px;
      }
      .hero-text {
        font-size: 25pt;
        padding: 10px;
      }
      nav {
        display: flex;
        justify-content: space-between;
        margin: 20px 10px 10px 10px;
      }
      
      nav div.menu-items {
        display: flex;
        width: 10%;
        justify-content: space-between;
      }
      nav > div {
        display: flex;
      }
      .title {
        font-size: 25pt;
      }
      .logo {
        height: 40px;
      }      
    `,
  ],
})
export class DogsListComponent implements OnInit {
  title = 'walk-my-dog';
  constructor(readonly dogsService:DogsService) {}

  ngOnInit(): void {}
}
