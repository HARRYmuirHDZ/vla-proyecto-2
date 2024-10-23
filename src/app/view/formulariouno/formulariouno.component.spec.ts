import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariounoComponent } from './formulariouno.component';

describe('FormulariounoComponent', () => {
  let component: FormulariounoComponent;
  let fixture: ComponentFixture<FormulariounoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulariounoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariounoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
