import {Component, OnInit} from '@angular/core';
import {BASE_URL} from '../constants/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  favTweelings = [{}];

  async ngOnInit() {
    const data = (await(await fetch(BASE_URL + '/tweelings')).json());
    this.favTweelings = data;
    console.log(data);
  }
}
