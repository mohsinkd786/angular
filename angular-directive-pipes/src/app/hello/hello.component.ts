import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }
  
  private messages:string[]
  private numbers:number[]

  ngOnInit() {
    this.messages=[
      "hello",
      "hi",
      "Hoy",
      "hey"
    ]
    this.numbers=[
      9.12,
      6.01,
      16,
      25,

    ]
  }
}
