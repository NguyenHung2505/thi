import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../module/Student";

const API = 'http://localhost:3000/students'
@Injectable({
  providedIn: 'root'
})
export class StudenService {

  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<any> {
    return this.httpClient.get(API);
  }

  save(student: any): Observable<any>{
    return this.httpClient.post(API , student);
  }
  getById(id: string):Observable<Student>{
    return this.httpClient.get<Student>(API+`/${id}`);
  }
  edit(id:string,student:Student): Observable<Student>{
    return this.httpClient.put<Student>(API+`/${id}`,student);
  }
  delete(id:any): Observable<Student>{
    return this.httpClient.delete<Student>(API+`/${id}`);
  }
}
