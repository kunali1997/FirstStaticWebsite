import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {


  Hero :any[] = [{id:11 , name: "Kunali"},
  {id: 12 , name: "Prachu"},
  {id :13 , name: "Tanu"},
  {id :14 , name: "Linu"},
  {id :15 , name: "Shiu"},
  {id :16 , name: "Parth"} 
  ]
  isShow: boolean | undefined;

  
  constructor() { }

  ngOnInit(): void {
  }

  showdata(){
    this.isShow=true;
  }
}
