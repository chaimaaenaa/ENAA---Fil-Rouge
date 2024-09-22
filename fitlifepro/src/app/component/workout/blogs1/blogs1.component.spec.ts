import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogs1Component } from './blogs1.component';

describe('Blogs1Component', () => {
  let component: Blogs1Component;
  let fixture: ComponentFixture<Blogs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogs1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
