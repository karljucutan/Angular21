import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesEx } from './pipes-ex';

describe('PipesEx', () => {
  let component: PipesEx;
  let fixture: ComponentFixture<PipesEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
