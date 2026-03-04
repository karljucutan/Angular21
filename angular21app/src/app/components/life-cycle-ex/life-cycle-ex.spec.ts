import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleEx } from './life-cycle-ex';

describe('LifeCycleEx', () => {
  let component: LifeCycleEx;
  let fixture: ComponentFixture<LifeCycleEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
