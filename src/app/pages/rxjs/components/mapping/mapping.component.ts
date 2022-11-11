import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  concatMap,
  exhaustMap,
  filter,
  interval,
  mergeMap,
  of,
  switchMap,
  take,
} from 'rxjs';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  mergeMap(){
    let postIds = interval(1).pipe(
      filter((val) => val > 0),
      take(5)
    );
    postIds
      .pipe(
        mergeMap((id) => {
          return this.http.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
          );
        })
      )
      .subscribe((postDetails) => {
        console.log(postDetails);
      });
  }

  concatMap(){
    let postIds = interval(1).pipe(
      filter((val) => val > 0),
      take(5)
    );
    postIds
      .pipe(
        concatMap((id) => {
          return this.http.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
          );
        })
      )
      .subscribe((postDetails) => {
        console.log(postDetails);
      });
  }

  switchMap(){
    let postIds = interval(1).pipe(
      filter((val) => val > 0),
      take(5)
    );
    postIds
      .pipe(
        switchMap((id) => {
          return this.http.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
          );
        })
      )
      .subscribe((postDetails) => {
        console.log(postDetails);
      });
  }

  exhaustMap(){
    let postIds = interval(1).pipe(
      filter((val) => val > 0),
      take(5)
    );
    postIds
      .pipe(
        exhaustMap((id) => {
          return this.http.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
          );
        })
      )
      .subscribe((postDetails) => {
        console.log(postDetails);
      });
  }
}
