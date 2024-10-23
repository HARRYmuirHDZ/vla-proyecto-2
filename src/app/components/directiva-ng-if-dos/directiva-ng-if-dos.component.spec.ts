import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgIfDosComponent } from './directiva-ng-if-dos.component';

describe('DirectivaNgIfDosComponent', () => {
  let component: DirectivaNgIfDosComponent;
  let fixture: ComponentFixture<DirectivaNgIfDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectivaNgIfDosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivaNgIfDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
