import { state } from '@angular/animations';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/app/models/userInfo';
import { IEntity, UserDataState } from './users.reducer';

// const selectUsersDataState = {state: AppState} => state.userData;

const selectProfileState = createFeatureSelector<UserDataState>('usersFeature');

// {
//     'usersFeature': {
//         'users': UsersState
//     }
// }

const selectAllUsersState = createSelector(
  selectProfileState,
  (profileState) => profileState.users
);

const selectAllFollowingUsersState = createSelector(
  selectProfileState,
  (profileState) => profileState.followingUsers
);

export const selectUsers = () =>
  createSelector(selectAllUsersState, (usersInfoState) => {
    if (usersInfoState && Object.keys(usersInfoState.entities)?.length) {
      usersInfoState = JSON.parse(JSON.stringify(usersInfoState));
      // send a copy of state object because you could change things in componnet
      // Not using Object.values() because it is not maintaining the array order.

      //   const usersInfoFromStore: UserInfo[] = Array.from(
      //     <any[]>usersInfoState.ids
      //   ).map((id: string) => usersInfoState.entities[id] as UserInfo);

      const usersInfoFromStore: IEntity<UserInfo>[] = Array.from(
        <any[]>usersInfoState.ids
      ).map((id: string) => usersInfoState.entities[id] as IEntity<UserInfo>);

      //   const usersInfoFromStore: IEntity<UserInfo>[] = Object.values(usersInfoState.entities);

      return usersInfoFromStore;
    }

    return null;
  });

export const selectUserDetails = (userId: string) =>
  createSelector(selectAllUsersState, (userDetailsState) => {
    if (userDetailsState && userDetailsState.entities[userId]) {
      userDetailsState = JSON.parse(JSON.stringify(userDetailsState));
      return userDetailsState.entities[userId];
    }
    return null;
  });

export const selectFollowingUsers = () =>
  createSelector(
    selectAllFollowingUsersState,
    selectAllUsersState,
    (followingUsersInfoState, usersInfoState) => {
      if (followingUsersInfoState && Object.keys(followingUsersInfoState.entities)?.length && usersInfoState && Object.keys(usersInfoState.entities)?.length) {
        followingUsersInfoState = JSON.parse(JSON.stringify(followingUsersInfoState));
        usersInfoState = JSON.parse(JSON.stringify(usersInfoState));

        // const followingUsersInfoFromStore: UserInfo[] = [];

        // for (const id in followingUsersInfoState.entities) {
        //   let tempObj = usersInfoState.entities[id];
        //   followingUsersInfoFromStore.push(tempObj!.entity);
        // }

        const followingUsersInfoFromStore: (UserInfo | null)[] = Array.from(
          <string[]>followingUsersInfoState.ids
        ).map((id: string) => {
          const tempObj = usersInfoState.entities[id];
          if(tempObj){
            return tempObj.entity as UserInfo;
          }
          return null;
        });

        // const usersInfoFromStore: UserInfo[] = Array.from(
        //   <any[]>usersInfoState.ids
        // ).map((id: string) => usersInfoState.entities[id]?.entity as UserInfo) as UserInfo[];

        return followingUsersInfoFromStore;
      }

      return null;
    }
  );