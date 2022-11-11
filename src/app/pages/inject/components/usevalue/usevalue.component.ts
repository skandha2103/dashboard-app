import { Component, Inject, OnInit } from '@angular/core';
import { AppConfig, Config } from 'src/app/models/config';

@Component({
  selector: 'app-usevalue',
  templateUrl: './usevalue.component.html',
  styleUrls: ['./usevalue.component.scss']
})
export class UsevalueComponent implements OnInit {

  // Config: DI token, type: Interface what we used
  constructor(@Inject(Config) private config: AppConfig) { 
    console.log('usevalue component constructor:', config)
  } 

  ngOnInit(): void {
  }

}
