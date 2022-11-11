import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-reddit-search',
  templateUrl: './reddit-search.component.html',
  styleUrls: ['./reddit-search.component.scss']
})
export class RedditSearchComponent implements OnInit {

  constructor(private http: HttpClient){}
  searchSubject$ = new Subject<string>();
  results$: Observable<any> = of();
  searchString:string='';

  ngOnInit() { 
    this.results$ = this.searchSubject$
    .pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(searchString => this.queryAPI(searchString))
    )

  }

queryAPI(searchString:string){
  console.log('queryAPI:', searchString);
  return this.http.get(`https://www.reddit.com/r/aww/search.json?q=${searchString}`)
  .pipe(
    map((result:any) => result['data']['children'])
  )
}

  inputChanged($event:any) {
    console.log('input changed', $event);
    this.searchSubject$.next($event);
  }

  ngOnDestroy() { }
}
