import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReactiveForm } from './user-reactive-form';

describe('UserReactiveForm', () => {
  let component: UserReactiveForm;
  let fixture: ComponentFixture<UserReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReactiveForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReactiveForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
