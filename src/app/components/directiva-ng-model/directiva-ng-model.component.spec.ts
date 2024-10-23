import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgModelComponent } from './directiva-ng-model.component';

describe('DirectivaNgModelComponent', () => {
  let component: DirectivaNgModelComponent;
  let fixture: ComponentFixture<DirectivaNgModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectivaNgModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivaNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
