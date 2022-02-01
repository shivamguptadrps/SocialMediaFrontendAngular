import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userid : Text;
  password :Text;
  userdetails =  new FormGroup({
    userid : new FormControl(),
    password : new FormControl(),
  })
  constructor(private service :ProductService ,private router: ActivatedRoute,private r : Router ) { }

  ngOnInit(): void {

  }

  login(){
    console.log(this.userdetails)
    this.service.signin(this.userdetails.value).subscribe((result)=>{
      console.warn(typeof(result))
      let res = JSON.parse(String(result))
     if( res.status !='fail')
     {
        localStorage.setItem('token',res['status'])
        this.r.navigate(['/home']);
     }
     else
     {
        this.r.navigate(['/signin']);
        alert("Please use correct details")
     }

  })

  }

}
