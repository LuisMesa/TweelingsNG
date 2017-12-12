import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetlingComponent } from './tweeling.component';

describe('TweetlingComponent', () => {
  let component: TweetlingComponent;
  let fixture: ComponentFixture<TweetlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
