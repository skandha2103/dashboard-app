import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  combineLatest,
  forkJoin,
  Observable,
  Subject,
  catchError,
  throwError,
  shareReplay,
  share,
  delay,
  scan,
  tap,
  BehaviorSubject,
  merge,
  concatMap,
  of,
} from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost } from '../models/IPost';
import { DeclarativeCategoryService } from './category.service';

@Injectable({
  providedIn: 'root',
})
export class DeclarativePostService {
  posts$ = this.http
    .get<{ [id: string]: IPost }>( // Objects of objects
      `https://rxjs-posts-default-rtdb.firebaseio.com/posts.json`
    )
    .pipe(
      map((posts) => {
        let postsData: IPost[] = [];  // Array of objects
        for (let id in posts) {
          postsData.push({ ...posts[id], id }); // id is not present in posts, adding id from the key
        }
        return postsData;
      }),
      catchError(this.handleError),
    //   shareReplay(1)
    );

  postsWithCategory$ = combineLatest([
    this.posts$,
    this.categoryService.categories$,
  ]).pipe(
    map(([posts, categories]) => {
      return posts.map((post) => {
        return {
          ...post,
          categoryName: categories.find(
            (category) => category.id === post.categoryId
          )?.title,
        } as IPost;
      });
    }),
    // shareReplay(1),
    catchError(this.handleError)
  );

  constructor(
    private http: HttpClient,
    private categoryService: DeclarativeCategoryService,
  ) {}

  handleError(error: Error) {
    return throwError(() => {
      return 'unknown error occurred. Please try again';
    });
  }
}