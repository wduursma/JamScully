import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NawComponent } from './naw.component';

describe('NawComponent', () => {
  let component: NawComponent;
  let fixture: ComponentFixture<NawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
