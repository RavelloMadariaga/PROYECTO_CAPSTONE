import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-chat-nutricion',
  templateUrl: './chat-nutricion.page.html',
  styleUrls: ['./chat-nutricion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChatNutricionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
