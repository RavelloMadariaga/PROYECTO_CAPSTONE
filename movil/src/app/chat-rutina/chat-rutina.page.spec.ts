import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatRutinaPage } from './chat-rutina.page';

describe('ChatRutinaPage', () => {
  let component: ChatRutinaPage;
  let fixture: ComponentFixture<ChatRutinaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
