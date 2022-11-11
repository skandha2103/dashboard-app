import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Subject, takeUntil, tap } from 'rxjs';
import { BaseComponent } from 'src/app/base/base/base.component';
import { UserInfo } from 'src/app/models/userInfo';
import { Store, select } from '@ngrx/store'
import { selectUsers } from 'src/app/store/users/users.selectors';
import { FollowingUsersRequested, UsersRequested } from 'src/app/store/users/users.action';
import { Router } from '@angular/router';
import { IEntity } from 'src/app/store/users/users.reducer';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent extends BaseComponent implements OnInit {
  userData: UserInfo[] = [];
  followingUserData: UserInfo[] = [];
  // userId: number=0;

  constructor(private http: HttpClient, private store: Store, private router: Router) {
    super();
  }

  override ngOnInit(): void {
    this.fetchUsers();
    // this.fetchFollowingUsers();
  }

  private fetchUsers() {
    // if (this._followingStatusSub) {
    //   this._followingStatusSub.unsubscribe();
    // }

    // let serviceCalled: boolean = false;

    this.store
      .pipe(
        select(selectUsers()), // fetch from cache
        tap((users: IEntity<UserInfo>[] | null) => {
          // if (!serviceCalled && !users) {
            if (!users) {
            //  serviceCalled = true;

            this.store.dispatch(
              new UsersRequested() // no payload
            );
          }
        }),

        // takeUntil(this.destroyed$)
      )
      .subscribe(
        (response: IEntity<UserInfo>[] | null) => {
          if (response) {
            // serviceCalled = false;
            let userDataArr: UserInfo[] = [];
            response.forEach((item)=>{
              userDataArr.push(item.entity)
            })
            this.userData = userDataArr;
          }
        },

        (error) => {
          // serviceCalled = false;

          console.error(error);
        }
      );
  }

  // private fetchFollowingUsers() {
  //   this.store
  //     .pipe(
  //       select(selectFollowingUsers()), // fetch from cache
  //       tap((followingUsers: UserInfo[]) => {
  //           if (!followingUsers) {
  //           this.store.dispatch(
  //             new FollowingUsersRequested() // no payload
  //           );
  //         }
  //       }),
  //     )
  //     .subscribe(
  //       (response: UserInfo[]) => {
  //         if (response) {
  //           this.followingUserData = response;
  //         }
  //       },

  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  // }

  onUserSelect(user: UserInfo){
    this.router.navigate(['/dashboard/stateManagement',user.id])
  }

}
function selectFollowingUsers(): (state: object) => unknown {
  throw new Error('Function not implemented.');
}

