import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-chat-rutina',
  templateUrl: './chat-rutina.page.html',
  styleUrls: ['./chat-rutina.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChatRutinaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
