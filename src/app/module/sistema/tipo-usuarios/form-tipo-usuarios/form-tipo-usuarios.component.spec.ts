import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipoUsuariosComponent } from './form-tipo-usuarios.component';

describe('FormTipoUsuariosComponent', () => {
  let component: FormTipoUsuariosComponent;
  let fixture: ComponentFixture<FormTipoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTipoUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTipoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
