import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { GlobalConstants, Todo } from 'src/app/Todo';
GlobalConstants

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() todo: Todo;
  public buttontitile:any ="Follow";
  imgUrl = GlobalConstants.imgURL
  constructor(private service :ProductService) { }
  ngOnInit(): void {
    console.warn(this.todo)
  }
  follow(follorequest)
  {
    
      console.warn();
      this.service.followrequest(follorequest.sno).subscribe((data)=>{
        this.buttontitile="Unfollow"
        alert('you followed '+follorequest.title)
        console.log(data)
      });

  
  }

  

}
