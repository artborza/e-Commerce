import { Component, Input, OnInit } from '@angular/core';
import { mainSideBar } from 'src/app/class/side-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  main:mainSideBar
  
  constructor() { }

  ngOnInit(): void {
    
  }
}
