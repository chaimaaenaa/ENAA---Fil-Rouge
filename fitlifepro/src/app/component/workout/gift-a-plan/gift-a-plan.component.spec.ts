import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftAPlanComponent } from './gift-a-plan.component';

describe('GiftAPlanComponent', () => {
  let component: GiftAPlanComponent;
  let fixture: ComponentFixture<GiftAPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftAPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftAPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
