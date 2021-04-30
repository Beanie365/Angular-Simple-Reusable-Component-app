import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [
    { name: 'James', age: 24, job: 'Designer'},
    { name: 'Jill', age: 67, job: 'Engineer'},
    { name: 'Jones', age: 35, job: 'Tester'}
  ];

  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ]
}
