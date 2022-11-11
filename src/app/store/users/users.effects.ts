import { Injectable } from '@angular/core';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { FollowingUsersLoaded, FollowingUsersRequested, UserActionTypes, UserDetailsLoaded, UserDetailsRequested, UsersLoaded, UsersRequested } from './users.action';
import { UsersService } from 'src/app/services/users.service';
import { of } from 'rxjs';
import { UserInfo } from 'src/app/models/userInfo';

@Injectable()
export class UsersEffects {
  usersInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType<UsersRequested>(UserActionTypes.UsersRequested),

      mergeMap((action: UsersRequested) =>
        this.usersService.getUsersDetails()
      ),
      // dispatch action, it will call reducer
      // response of get users details
      map((users: UserInfo[]) => new UsersLoaded({ users: users })) // return one action or array of action, pass the payload
    )
  );

  userDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType<UserDetailsRequested>(UserActionTypes.UserDetailsRequested),

      mergeMap((action: UserDetailsRequested) =>
        this.usersService.getEachUserDetails(action.payload.userId)
        // .pipe(
        //     catchError(err => {
        //         console.log('error loading user', err);
        //         return of(null);
        //     })
        // )
      ),
      map((user: UserInfo) => new UserDetailsLoaded({ userDetails: user }))
    )
  );

  followingUsersInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType<FollowingUsersRequested>(UserActionTypes.FollowingUsersRequested),

      mergeMap((action: FollowingUsersRequested) =>
        this.usersService.getFollowingUsersDetails()
      ),
      
      map((followingUsers: UserInfo[]) => new FollowingUsersLoaded({ followingUsers: followingUsers })) // return one action or array of action, pass the payload
    )
  );

  constructor(private usersService: UsersService, private actions$: Actions) {}
}
