import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroDatosUsuarioPage } from './registro-datos-usuario.page';

describe('RegistroDatosUsuarioPage', () => {
  let component: RegistroDatosUsuarioPage;
  let fixture: ComponentFixture<RegistroDatosUsuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDatosUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
