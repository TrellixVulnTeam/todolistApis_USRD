import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks:any;

  id = "";
  public newTask = {
    title:"",
    description:""
  }
  constructor(public taskService : TaskService) { }

  ngOnInit(){
    this.getTasks();
  }

  getTasks(){    
    this.taskService.getTasks().subscribe(res=>{
      this.tasks = res;
    })
  }
  
  createTask(){
    console.log("I am vijay");
    
    this.taskService.createTask(this.newTask).subscribe(res=>{
      this.cleanValue();
      this.getTasks();
    });
  }

  deleteTask(id:any){
    this.taskService.deleteTasks(id).subscribe(res=>{
      this.getTasks();
    })
  }

  setUpdate(t:any){
    this.id = t._id;
    this.newTask.title = t.title
    this.newTask.description = t.description;
  }

  cleanValue(){
    this.id = "";
    this.newTask = {
      title:"",
      description:""
    }
  }

  
  updateTask(){
    this.taskService.updateTask(this.id,this.newTask).subscribe(res=>{
      this.cleanValue();
      this.getTasks();
    })
  }
      
}