import { Component, OnInit } from '@angular/core';
import { Todo,People,GlobalConstants } from '../../Todo';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/product.service';
import { stringify } from '@angular/compiler/src/util';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  p :  any;
  imgurl = GlobalConstants.imgURL
  post : Todo[]=[];
  people : Todo[]=[]
  so : Todo;
  peopleFlag : Todo;
  localItem : string;
  selfprofile : any;
  li:any;

  po:any;
  lis=[];
  isloaded = false;
  constructor(private service :ProductService ,private router: ActivatedRoute,private r : Router) 
  { }
  tweetdetails =  new FormGroup({
    desc  : new FormControl(),  //event.target.files[0]
    authtoken :  new FormControl(localStorage.getItem('token')),
    tweeting : new FormControl(null, {validators: [Validators.required]} ),

  })

  ngOnInit() {

    this.service.getFeedDetails().subscribe(data=>{
   
      
      console.warn(data)
      this.li = data[0]
      this.selfprofile = data[2]
      console.warn(this.selfprofile)

    
    for(let val of Object.keys(data[0]))
    {   
      console.log(val)
        this.so={
          sno: this.li[val]['id'],
          title:this.li[val]['username'],
          active:true,
          desc:this.li[val]['desc'],
          'file_pic': this.li[val]['img']

        }
        this.post.push(this.so)
    }
    this.li = data[1]
    for(let val of Object.keys(data[1]))
    {   
      console.log(val)
        this.peopleFlag={
          sno: this.li[val]['id'],
          title:this.li[val]['username'],
          active:false,
          desc:'',
          'file_pic': this.li[val]['img']
        }
        this.people.push(this.peopleFlag)
    }

    this.li = data[2]
    for(let val of Object.keys(data[2]))
    {   
      console.log(val)
        this.peopleFlag={
          sno: this.li[val]['id'],
          title:this.li[val]['username'],
          active:false,
          desc:'',
          'file_pic': this.li[val]['img']
        }
        this.selfprofile = this.peopleFlag
    }




    this.isloaded=true
  })
  }


  dotweet()
  {
      console.warn(this.tweetdetails);

      this.service.doTweet(this.tweetdetails.value).subscribe((data)=>{
        console.log(data)
      });
      alert("you tweeted")
      this.tweetdetails.patchValue({tweeting: ''});
      this.tweetdetails.patchValue({desc: ''});

  }

  onSelect(event) {
    const file =event.target.files[0]    // (event.target as HTMLInputElement).files[0]; //event.target.files[0]

    this.tweetdetails.get('tweeting').setValue(file);
    //this.tweetdetails.patchValue({tweeting: file});
    }

}
