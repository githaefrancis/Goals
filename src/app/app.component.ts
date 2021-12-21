import { Component } from '@angular/core';
import {Goal} from './goal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // goal='Watch Friends';
  title='Goals'
  goals:Goal[]=[
    {id:1,name:'Watch Friends'},
    {id:2,name:'Buy cookies'},
    {id:3,name:'Get new Phone Case'},
    {id:4,name:'Get Dog Food'},
    {id:5,name:'Splve math homework'},
    {id:6,name:'PLot my world domination plan'}
  ];

  // constructor(){
  //   this.goals=['Watch Friends','Buy cookies','Get new phone case'];
  // }
}
