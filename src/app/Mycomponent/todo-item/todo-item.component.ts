import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { People, Todo,GlobalConstants } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  public isUpdated:number = 0 ;
  imgUrl = GlobalConstants.imgURL
  constructor() { }
  ngOnInit(): void {
  }

}
