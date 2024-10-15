import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro-datos-usuario',
  templateUrl: './registro-datos-usuario.page.html',
  styleUrls: ['./registro-datos-usuario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroDatosUsuarioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
