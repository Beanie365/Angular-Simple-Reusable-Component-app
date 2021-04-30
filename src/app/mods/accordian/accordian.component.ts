import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  @Input() items = [];
  openedItemsIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index:number){
    if (index === this.openedItemsIndex){
      this.openedItemsIndex =-1;
    }
    else{
    this.openedItemsIndex = index;
    }
  }
}
