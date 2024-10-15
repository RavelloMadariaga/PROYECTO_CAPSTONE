import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatNutricionPage } from './chat-nutricion.page';

describe('ChatNutricionPage', () => {
  let component: ChatNutricionPage;
  let fixture: ComponentFixture<ChatNutricionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatNutricionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
