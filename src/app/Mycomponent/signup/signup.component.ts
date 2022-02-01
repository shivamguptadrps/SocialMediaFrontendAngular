import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public file_pic: File;
  public img :any;
  userdetails =  new FormGroup({
    username  : new FormControl(),
    password : new FormControl(),
    email  : new FormControl(),
    cnfpassword : new FormControl(),
    userfullname  : new FormControl(),
    usern_mobile_no : new FormControl(),
    profile_pic : new FormControl(null, {validators: [Validators.required]} ),

  })
  constructor(private service :ProductService,private router: ActivatedRoute,private r : Router) { }

  ngOnInit(): void {
  }
  signup(){
    console.warn(this.userdetails)
    this.service.signup(this.userdetails.value).subscribe((result)=>{
      
    console.warn(result)
    let res = JSON.parse(String(result))
    if( res.status !='fail')
      {
     this.r.navigate(['/signin']);
      }
    else{
    alert("Please Use Correct Details")
    this.r.navigate(['/signup']);
      }


  })


  }
  docheck(event)
  {
    console.log(event)
    this.img = event.target.files[0]
  }


  onSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.userdetails.patchValue({profile_pic: file});
    }




}
