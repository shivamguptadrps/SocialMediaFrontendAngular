import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Listtodo } from './interface/listtodo'; 
import { mytodo } from './interface/listtodo'; 
import { Observable } from 'rxjs';
import { GlobalConstants } from './Todo';



let token = localStorage.getItem('token')
GlobalConstants
const headers = new HttpHeaders().set('authtoken',token)
@Injectable({
            providedIn: 'root'
            })

export class ProductService {
  
url=GlobalConstants.apiURL
  p :mytodo={
    title  : "string",
    desc :"string",
    active : "string"
  }

  constructor(private http: HttpClient ) {}

  getFeedDetails()
  {
    const uploadData = new FormData();
    uploadData.append('authtoken',localStorage.getItem('token'))
    return this.http.post(this.url+'home/' ,uploadData);
  }
  signin(data)
  {
    let a = this.url+'signin/'
    return this.http.post(a,data)
  }
  signup(data)
  {
    console.log(data)
    const uploadData = new FormData();
    uploadData.append('username',data['username'])
    uploadData.append('password',data['password'])
    uploadData.append('email',data['email'])
    uploadData.append('usern_mobile_no',data['usern_mobile_no'])
    uploadData.append('userfullname',data['userfullname'])
    uploadData.append('profile_pic',data['profile_pic'])
    uploadData.append('profile_pic',data['profile_pic'])
    let a = this.url+'signup/'
    return this.http.post(a,uploadData)
  }
  doTweet(data)
  {
    const uploadData = new FormData();
    uploadData.append('desc',data['desc'])
    uploadData.append('authtoken',data['authtoken'])
    uploadData.append('tweeting',data['tweeting'])

    return this.http.post(this.url+'tweet/', uploadData)
  }
  followrequest(id)
  {
    const uploadData = new FormData();
    uploadData.append('id',id)
    uploadData.append('authtoken',localStorage.getItem('token'))
    return this.http.post(this.url+'follow/', uploadData)

  }
  }


