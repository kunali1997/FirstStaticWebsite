import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {


  
  isShow: boolean | undefined;

  
  constructor() { }

  ngOnInit(): void {
  }

 
}
