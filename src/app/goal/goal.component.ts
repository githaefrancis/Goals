import { Component, OnInit } from '@angular/core';
import {Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[];
  alertService:AlertService;
  quote!:Quote;
  

  goToUrl(id:number){
     this.router.navigate(['/goals',id])
  }
  addNewGoal(goal:Goal){
    let goalLength=this.goals.length;
    goal.id=goalLength+1;
    goal.completeDate=new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index:any){
    this.goals[index].showDescription=!this.goals[index].showDescription;
  }
  deleteGoal(index:number){
    
      let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)
      if(toDelete){
        this.goals.splice(index,1);
        this.alertService.alertMe("The goal has been deleted");
      }
      
    
  }
  
  constructor(goalService:GoalService,alertService:AlertService,private quoteService:QuoteRequestService,private router:Router) {
    this.goals=goalService.getGoals();
    this.alertService=alertService;
   }

  ngOnInit(): void {

    // interface ApiResponse{
    //   author:string;
    //   quote:string;
    // }

    // this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
    //   //Successful API request

    //   this.quote=new Quote(data.author,data.quote);
    // },err=>{
    //   this.quote=new Quote("Winston Churchill","Never never give up!");
    //   console.log("An error occurred");
    // })

    this.quoteService.quoteRequest();
    this.quote=this.quoteService.quote
  }

}
