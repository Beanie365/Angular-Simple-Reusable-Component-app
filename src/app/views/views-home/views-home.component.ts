import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

stats = [
{value: 22, label: '# of users'},
{value: 100, label: 'Revenue'},
{value: 255, label: 'Reviews'}

];

images=[
{image: '/assets/images/couch.jpeg',
title: 'Couch',
description: 'This is a comfy couch'},

{image: '/assets/images/dresser.jpeg',
title: 'dresser',
description: 'Great dresser for storage'}
];

  constructor() { }

  ngOnInit(): void {
  }

}
