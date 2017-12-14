import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass']
})
export class ResultComponent implements OnInit {
  @Input()
  tones = [{score: 0.95, tone_name: 'Joy'}, {score: 0.578, tone_name: 'Angry'}, {score: 0.1234, tone_name: 'Name'}];
  @Input()
  query = 'Donald Trump';
  constructor() {
  }

  ngOnInit() {
  }
  getColor() {
    if (this.tones.length > 0) {
      return this.tones[0].tone_name;
    }
    return 'Joy';
  }
}
