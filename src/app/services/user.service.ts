import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Token } from "../models/users.models"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://3.19.57.90:3000/api"

  tokenName = "TOKEN"

  constructor(private http:HttpClient) { }

  headers:HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

  login(user: User):Observable<Token>{
    return this.http.post<Token>(this.apiUrl+"/users/login", JSON.stringify(user),{ headers: this.headers })
  }

  register(user:User): Observable<User> {
    return this.http.post<User>(this.apiUrl+"/users", user,{ headers: this.headers }) 
  }

  isLogged():boolean{
    return localStorage.getItem(this.tokenName) ? true : false;
  }

  saveToken(token:Token){
    localStorage.setItem(this.tokenName, token.token)
  }

  userList():Observable<User[]>{
    let headers = this.headers;
    const token:string = localStorage.getItem(this.tokenName) as string
    headers = headers.append("Authorization", token)
    return this.http.get<User[]>(this.apiUrl+"/users/list", { headers })
  }
}
