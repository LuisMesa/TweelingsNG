import {Component, OnInit} from '@angular/core';
import {BASE_URL} from '../constants/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  favTweelings = [];
  tweeling;
  input = '';
  loading = false;

  async ngOnInit() {
    const data = (await(await fetch(BASE_URL + '/favTweelings')).json());
    this.favTweelings = data;
    // console.log(data);
  }

  getInputHighLigth() {
    return this.input.replace(/ /g, '\u00a0');
  }

  onKeyPress(event) {
    if (event.key === 'Enter') {
      this.newTweeling();
    }
  }

  async newTweeling() {
    this.loading = true;
    const data = (await(await fetch(BASE_URL + '/tweeling?query=' + this.input)).json());
    this.tweeling = data;
    this.loading = false;
  }

  closeOthers(event) {
    this.favTweelings.forEach(t => {
      if (t.query !== event.query) {
        t.open = false;
      }
    });
  }
}
