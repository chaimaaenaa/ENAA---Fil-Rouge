import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadDashComponent } from './head-dash.component';

describe('HeadDashComponent', () => {
  let component: HeadDashComponent;
  let fixture: ComponentFixture<HeadDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
