import { UserInfo } from "src/app/models/userInfo";
import { Action } from '@ngrx/store'
 
 
export enum UserActionTypes {

    UsersRequested ='[Users requested API]',
    UsersLoaded = '[Users Loaded]',

    UserDetailsRequested ='[User Details requested API]',
    UserDetailsLoaded = '[User Details Loaded]',

    FollowingUsersRequested ='[Following users requested API]',
    FollowingUsersLoaded = '[Following users Loaded]',

 }


 /******PAYLOADS ******/

//  export interface UsersRequestPayLoad{
//     userId: string;
//  }

 export interface UsersLoadedPayLoad{
    users: UserInfo[];
 }

 export interface UserDetailsRequestPayLoad{
    userId: string;
 }

 export interface UserDetailsLoadedPayLoad{
    userDetails: UserInfo;
 }

 export interface FollowingUsersLoadedPayLoad{
    followingUsers: UserInfo[];
 }


  /******ACTIONS ******/

export class UsersRequested implements Action {
    readonly type = UserActionTypes.UsersRequested;
    // constructor(public payload: UsersRequestPayLoad){}
    constructor(){}
}


export class UsersLoaded implements Action {
    readonly type = UserActionTypes.UsersLoaded;
    constructor(public payload: UsersLoadedPayLoad){}
}


export class UserDetailsRequested implements Action {
    readonly type = UserActionTypes.UserDetailsRequested;
    constructor(public payload: UserDetailsRequestPayLoad){}
}


export class UserDetailsLoaded implements Action {
    readonly type = UserActionTypes.UserDetailsLoaded;
    constructor(public payload: UserDetailsLoadedPayLoad){}
}


export class FollowingUsersRequested implements Action {
    readonly type = UserActionTypes.FollowingUsersRequested;
    // constructor(public payload: FollowingUsersRequested){}
    constructor(){}
}


export class FollowingUsersLoaded implements Action {
    readonly type = UserActionTypes.FollowingUsersLoaded;
    constructor(public payload: FollowingUsersLoadedPayLoad){}
}



export type UsersActions =  UsersRequested | UsersLoaded | UserDetailsRequested | UserDetailsLoaded | FollowingUsersRequested | FollowingUsersLoaded;