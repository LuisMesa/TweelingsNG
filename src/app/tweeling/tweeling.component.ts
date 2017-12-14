import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweeling',
  templateUrl: './tweeling.component.html',
  styleUrls: ['./tweeling.component.css']
})
export class TweelingComponent implements OnInit {
  @Input()
  Tweeling = {tweets: [], tones: [], query: ''};
  @Input()
  open = true;
  constructor() { }

  ngOnInit() {
  }

  toggle = () => {
    this.open = !this.open;
  }

}
