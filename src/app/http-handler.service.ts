import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {

  todoItems: string[] = [];

  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  url = 'http://localhost:5000/todo';

  constructor(private http: HttpClient) {}

  getTodoItems(): string[] {
    return this.todoItems;
  }
  setTodoItems(todoItem) {
    this.todoItems.push(todoItem);
  }
  deleteTodoItems() {
    this.todoItems = [];
  }

  postHttpTodoItem(task): Observable<TodoItem> {
    const todoItem = {
      task: String = task
    };
    return this.http.post<TodoItem>(this.url, JSON.stringify(todoItem), this.options);
  }

  getHttpTodoItem(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.url);
  }

  getHttpLastTodoItem(): Observable<TodoItem> {
    return this.http.get<TodoItem>(this.url + '/last');
  }

  updateHttpTodoItem(item, task): Observable<TodoItem> {
    const todoItem = {
      task: String = task
    };
    return this.http.patch<TodoItem>(this.url + '/' + item, JSON.stringify(todoItem), this.options);
  }

  deletHttpTodoItem(task): Observable<TodoItem> {
    const todoItem = {
      task: String = task
    };
    return this.http.delete<TodoItem>(this.url + '/' + task);
  }
}
