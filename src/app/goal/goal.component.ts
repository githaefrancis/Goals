import { Component, OnInit } from '@angular/core';
import {Goal } from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[]=[
    new Goal(1,'Watch Friends','Watch the famous Friends series'),
    new Goal(2,'Buy cookies','Buy cookies for myself'),
    new Goal(3,'Get new Phone Case','Buy my phone a cloth'),
    new Goal(4,'Get Dog Food','Get my dog some food'),
    new Goal(5,'Solve math homework','Do my math'),
    new Goal(6,'Plot my world domination plan','Plan the world take over')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
