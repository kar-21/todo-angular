import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../http-handler.service';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {
  constructor(private httpHandler: HttpHandlerService) {}
  todoItem: string;

  ngOnInit() {}
  addItem() {
    this.httpHandler
      .postHttpTodoItem(this.todoItem)
      .subscribe(() =>
        this.httpHandler
          .getHttpLastTodoItem()
          .subscribe(data => this.httpHandler.setTodoItems(data[0].task))
      );
    this.todoItem = '';
  }
}
