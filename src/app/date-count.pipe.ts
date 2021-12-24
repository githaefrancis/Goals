import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date=new Date();
    let todayWithNoTime:any=new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var dateDifference=Math.abs(value-todayWithNoTime);//return value in milliseconds

    const secondsInDay=86400;

    var dateDifferenceSeconds=dateDifference*0.001;//convert to seconds


    var dateCounter=dateDifferenceSeconds/secondsInDay;

    if(dateCounter >=1 && value > todayWithNoTime){
      return dateCounter;

    }
    else{
      return 0;
    }

  }

}
