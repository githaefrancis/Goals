import { Component, OnInit } from '@angular/core';
import {Goal } from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[]=[
    new Goal(1,'Watch Friends','Watch the famous Friends series',new Date(2021,11,13)),
    new Goal(2,'Buy cookies','Buy cookies for myself',new Date(2022,0,1)),
    new Goal(3,'Get new Phone Case','Buy my phone a cloth',new Date(2022,2,4)),
    new Goal(4,'Get Dog Food','Get my dog some food',new Date(2022,3,5)),
    new Goal(5,'Solve math homework','Do my math',new Date(2022,2,6)),
    new Goal(6,'Plot my world domination plan','Plan the world take over',new Date(2022,1,14))
  ];
  addNewGoal(goal:Goal){
    let goalLength=this.goals.length;
    goal.id=goalLength+1;
    goal.completeDate=new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index:any){
    this.goals[index].showDescription=!this.goals[index].showDescription;
  }
  deleteGoal(isComplete:boolean,index:number){
    if(isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)
      if(toDelete){
        this.goals.splice(index,1);
      }
      
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
