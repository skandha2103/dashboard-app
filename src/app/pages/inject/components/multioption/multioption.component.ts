import { Component, Inject, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-multioption',
  templateUrl: './multioption.component.html',
  styleUrls: ['./multioption.component.scss']
})
export class MultioptionComponent implements OnInit {

  // constructor(@Inject(LoggerService) private loggers: LoggerService[]) { 
  //   console.log(this.loggers);
  //   for(const logger of this.loggers){
  //     logger.log('multioption component constructor')
  //   }
  // }

  ngOnInit(): void {
  }

}
