import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {

  title = 'Your Receipt';

  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }

  ngOnInit(): void {
  }

}
