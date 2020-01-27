import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderOverMyComponent } from './slider-about-me.component';

describe('SliderOverMyComponent', () => {
  let component: SliderOverMyComponent;
  let fixture: ComponentFixture<SliderOverMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderOverMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderOverMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
