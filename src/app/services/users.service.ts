import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { UserInfo } from '../models/userInfo';
import followingData from '../json/following.json';  

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsersDetails(): Observable<UserInfo[]>{
    return this.http.get("https://reqres.in/api/users?page=2")
    .pipe(
          // takeUntil(this.destroyed$),
          map((res:any)=>{
      return res.data;
    })) 
  }

  getEachUserDetails(id: string): Observable<UserInfo>{
    return this.http.get(`https://reqres.in/api/users/${id}`)
    .pipe(
          // takeUntil(this.destroyed$),
          map((res:any)=>{
      return res.data;
    })) 
  }

  getFollowingUsersDetails(): Observable<UserInfo[]>{
    return of(followingData as UserInfo[]); 
  }

}
