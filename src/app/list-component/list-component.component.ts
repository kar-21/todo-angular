import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../http-handler.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  constructor(private httpHandler: HttpHandlerService) {}
  todoItems: string[] = [];
  ngOnInit() {
    this.init();
  }

  init() {
    this.httpHandler.getHttpTodoItem().subscribe(datas => {
      datas.forEach(data => this.httpHandler.setTodoItems(data.task));
    });
    this.todoItems = this.httpHandler.getTodoItems();
  }

  deleteItem(item) {
    this.httpHandler.deletHttpTodoItem(item).subscribe(() => {
      this.httpHandler.deleteTodoItems();
      this.init();
    });
  }

  updateItem(item, newValue) {
    this.httpHandler.updateHttpTodoItem(item, newValue).subscribe(() => {
      this.httpHandler.deleteTodoItems();
      this.init();
    });
  }
}
