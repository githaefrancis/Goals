import { Component, OnInit } from '@angular/core';
import {Goal } from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[]=[
    {id:1,name:'Watch Friends',description:'Watch the famous Friends series'},
    {id:2,name:'Buy cookies',description:'Buy cookies for myself'},
    {id:3,name:'Get new Phone Case',description:'Buy my phone a cloth'},
    {id:4,name:'Get Dog Food',description:'Get my dog some food'},
    {id:5,name:'Solve math homework',description:'Do my math'},
    {id:6,name:'Plot my world domination plan',description:'Plan the world take over'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
