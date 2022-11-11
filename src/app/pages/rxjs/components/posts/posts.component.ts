import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, tap } from 'rxjs';
import { DeclarativeCategoryService } from 'src/app/services/category.service';
import { DeclarativePostService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PostsComponent implements OnInit {
  selectedCategoryId = '';
  posts$ = this.postService.postsWithCategory$;
  categories$ = this.categoryService.categories$;

  selectedCategorySubject = new BehaviorSubject<string>('');
  selectedCategoryAction$ = this.selectedCategorySubject.asObservable();

  filteredPosts$ = combineLatest([
    this.posts$,
    this.selectedCategoryAction$
  ]).pipe(
    map(([posts, selectedCategoryId]) => {
      return posts.filter((post) =>
        selectedCategoryId ? post.categoryId === selectedCategoryId : true
      );
    })
  );

  constructor(
    private postService: DeclarativePostService,
    private categoryService: DeclarativeCategoryService,
  ) {}

  ngOnInit() {
  }

  onCategoryChange(event: Event) {
    let selectedCategoryId = (event.target as HTMLSelectElement).value;
    // this.selectedCategoryId = selectedCategoryId;
    this.selectedCategorySubject.next(selectedCategoryId);
  }
}