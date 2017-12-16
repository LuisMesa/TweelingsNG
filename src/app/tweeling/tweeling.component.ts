import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tweeling',
  templateUrl: './tweeling.component.html',
  styleUrls: ['./tweeling.component.css']
})
export class TweelingComponent implements OnInit {
  @Input()
  Tweeling = {tweets: [], tones: [], query: '', open: false};
  @Output()
  emitter = new EventEmitter<{ query: string }>();

  constructor() {
  }

  ngOnInit() {
  }

  toggle = () => {
    this.Tweeling.open = !this.Tweeling.open;
    if (this.Tweeling.open) {
      this.emitter.emit({query: this.Tweeling.query});
    }
  }

}
