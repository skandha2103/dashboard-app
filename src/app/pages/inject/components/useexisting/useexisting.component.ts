import { Component, OnInit } from '@angular/core';
import { ClientLoggerService } from 'src/app/services/client-logger.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-useexisting',
  templateUrl: './useexisting.component.html',
  styleUrls: ['./useexisting.component.scss']
})
export class UseexistingComponent implements OnInit {

  constructor(private logger: LoggerService, private newLogger: ClientLoggerService) { 
    this.logger.log('useexisting component constructor');
    this.newLogger.log('useexisting component constructor')
  }

  ngOnInit(): void {
  }

}
