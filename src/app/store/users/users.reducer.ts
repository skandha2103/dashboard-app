import { UserInfo } from "src/app/models/userInfo";
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { FollowingUsersLoadedPayLoad, UserActionTypes, UserDetailsLoadedPayLoad, UsersLoadedPayLoad } from "./users.action";
import { UsersActions } from './users.action';

/****Adapters*****/

// Adapter is only to modify entity state
// each entity is userinfo

// interface UsersState extends EntityState<UserInfo>{}
// export const userAdapter: EntityAdapter<UserInfo> = createEntityAdapter<UserInfo>({
//     sortComparer: false,
//     selectId: (userEntity: UserInfo) => userEntity.id?.toString()
// })

interface UsersState extends EntityState<IEntity<UserInfo>>{}
export const userAdapter: EntityAdapter<IEntity<UserInfo>> = createEntityAdapter<IEntity<UserInfo>>({
    sortComparer: false,
    selectId: (userEntity: IEntity<UserInfo>) => userEntity.entity.id?.toString()
})

// {
//     entities: {
//         'id1': {}, // full obj
//         'id2': {}
//     },
//     ids: ['id1','id2']
// }


interface FollowingUsersState extends EntityState<string>{}
export const followingUsersAdapter: EntityAdapter<string> = createEntityAdapter<string>({
    sortComparer: false,
    selectId: (userEntity: string) => userEntity
})


/****Data state*****/

export interface UserDataState {
    users: UsersState; // db table
    // users: UserInfo[]
    followingUsers: FollowingUsersState;
}

// State should always contain array of objects ()

export interface IEntity<T>{
    entity: T;
    partiallyLoaded: boolean;
}


/****Initial state*****/

export const usersInitialState: UsersState = userAdapter.getInitialState({});
export const followingUsersInitialState: FollowingUsersState = followingUsersAdapter.getInitialState({});


export const userDataInitialState: UserDataState = {
    users: usersInitialState,
    followingUsers: followingUsersInitialState
}

/****Reducers*****/

export function usersReducer(state=userDataInitialState, action: UsersActions): UserDataState {
    switch(action.type){
        case UserActionTypes.UsersLoaded:
            return usersLoaded(state, action.payload)
        case UserActionTypes.UserDetailsLoaded:
            return usersDetailsLoaded(state, action.payload)
        case UserActionTypes.FollowingUsersLoaded:
            return followingUsersDetailsLoaded(state, action.payload)
        default:
            return state;
    }
}

function usersLoaded(state:UserDataState, payload: UsersLoadedPayLoad): UserDataState{
    if(!payload || !payload.users || !payload.users.length){
        return state;
    }
    let usersToStore: IEntity<UserInfo>[] = [];
    payload.users.forEach((user: UserInfo)=>{
        // user = {...user,following:false}
        usersToStore.push({ partiallyLoaded: true, entity: user })
    });
    return {
        ...state,
        users: userAdapter.upsertMany(usersToStore,state.users)
    };  

    // return {...state, users: userAdapter.upsertMany(payload.users,state.users)};  
    // state reference is changed, all selectors depending on this state  will be automatically called
}

function usersDetailsLoaded(state:UserDataState, payload: UserDetailsLoadedPayLoad): UserDataState{
    if(!payload || !payload.userDetails){
        return state;
    }
    const userToStore: IEntity<UserInfo> = { partiallyLoaded: false, entity: payload.userDetails }
    return {...state, users: userAdapter.upsertOne(userToStore,state.users)};  
}

// const abc = {a:1,b:2,c:3};
// const def = {...abc,c:4};

function followingUsersDetailsLoaded(state:UserDataState, payload: FollowingUsersLoadedPayLoad): UserDataState{
    if(!payload || !payload.followingUsers || !payload.followingUsers.length){
        return state;
    }
    // return {
    //     ...state,
    //     followingUsers: followingUsersAdapter.upsertMany(payload.followingUsers,state.followingUsers)
    // };  
    const userDetailsPayload: UsersLoadedPayLoad = { users : payload.followingUsers };
    state = usersLoaded(state,userDetailsPayload);

    return {
        ...state,
        followingUsers: followingUsersAdapter.upsertMany(payload.followingUsers.map((user:UserInfo)=>user.id.toString()),state.followingUsers)
    };  
    // state reference is changed, all selectors depending on this state  will be automatically called
}
