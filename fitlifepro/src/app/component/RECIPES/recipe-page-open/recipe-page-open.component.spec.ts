import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePageOpenComponent } from './recipe-page-open.component';

describe('RecipePageOpenComponent', () => {
  let component: RecipePageOpenComponent;
  let fixture: ComponentFixture<RecipePageOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipePageOpenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipePageOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
