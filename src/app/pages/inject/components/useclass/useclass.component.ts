import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-useclass',
  templateUrl: './useclass.component.html',
  styleUrls: ['./useclass.component.scss']
})
export class UseclassComponent implements OnInit {

  constructor(private logger: LoggerService) {
    this.logger.log('useclass component constructor')
   }

  ngOnInit(): void {
  }

}
