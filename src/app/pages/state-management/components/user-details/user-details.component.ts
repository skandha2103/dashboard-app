import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from 'src/app/models/userInfo';
import { UsersService } from 'src/app/services/users.service';
import { Store, select } from '@ngrx/store'
// import { selectUserDetails } from 'src/app/store/users/users.selectors';
import { tap } from 'rxjs';
import { UserDetailsRequested } from 'src/app/store/users/users.action';
import { IEntity } from 'src/app/store/users/users.reducer';
import { selectUserDetails } from 'src/app/store/users/users.selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userId: string = '';
  user!: UserInfo;
  allDataFetched: boolean = false;
  constructor(private route: ActivatedRoute, private userService: UsersService, private store: Store) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')!;
    // this.userService.getEachUserDetails(this.userId.toString())
    // .subscribe((data)=>{
    //   console.log(data);
    //   this.user = data;
    //   this.allDataFetched = true;
    // })
    this.fetchUserDetails()
  }


  private fetchUserDetails() {

    this.store
      .pipe(
        select(selectUserDetails(this.userId)), // fetch from cache
        tap((user: IEntity<UserInfo> | null | undefined) => {
          if (!user || user.partiallyLoaded) {

            this.store.dispatch(
              new UserDetailsRequested({userId: this.userId})
            );
          }
        }),

        // takeUntil(this.destroyed$)
      )
      .subscribe(
        (response: IEntity<UserInfo> | null | undefined) => {
          if (response) {
            this.user = response.entity;
          }
        },

        (error) => {
          console.error(error);
        }
      );
  }

}
