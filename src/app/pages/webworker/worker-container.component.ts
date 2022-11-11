import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-container',
  templateUrl: './worker-container.component.html',
  styleUrls: ['./worker-container.component.scss']
})
export class WorkerContainerComponent implements OnInit {
  worker!: Worker;

  constructor() { }

  ngOnInit(): void {
    console.log("url: ",import.meta.url) // absolute path of component ts, protocol: file
    this.initWorker();
  }

  initWorker() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./worker-container.worker', import.meta.url));
      this.worker.onmessage = ({ data }) => {
        console.log('Data received from worker ', data);
      };
      // this.worker.postMessage('hello');
      this.worker.onerror = (error) => {
        console.error('Error message received from worker:', error);
      };
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  postMsg(){
    this.worker.postMessage({ action: 'generateFibonacci', param: 42 });
  }

  terminateWorker(){
    this.worker.terminate();
  }

}