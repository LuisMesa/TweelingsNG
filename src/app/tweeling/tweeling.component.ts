import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweeling',
  templateUrl: './tweeling.component.html',
  styleUrls: ['./tweeling.component.css']
})
export class TweelingComponent implements OnInit {
  open = true;
  tweets = [{}, {}, {}, {}];
  constructor() { }

  ngOnInit() {
  }

  toggle = () => {
    this.open = !this.open;
  }

}
