import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgModelDosComponent } from './directiva-ng-model-dos.component';

describe('DirectivaNgModelDosComponent', () => {
  let component: DirectivaNgModelDosComponent;
  let fixture: ComponentFixture<DirectivaNgModelDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectivaNgModelDosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivaNgModelDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
