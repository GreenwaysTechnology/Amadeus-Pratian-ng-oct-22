import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  //data - primtives
  message: string = 'Hello'
  toWhom: string = 'Subramanian'

  constructor() { }

  ngOnInit(): void {
  }

}
