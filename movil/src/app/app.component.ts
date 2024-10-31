import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, MenuController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule],
})
export class AppComponent {
  appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Registro', url: '/registro', icon: 'person' },
    { title: 'Chat Rutina', url: '/chat-rutina', icon: 'barbell' },
    { title: 'Chat Nutrición', url: '/chat-nutricion', icon: 'restaurant' },
    { title: 'Login', url: '/login', icon: 'account login' },
    { title: 'Estadísticas', url: '/estadisticas', icon: 'information-circle' },
    { title: 'Registro Datos Usuario', url: '/registro-datos-usuario', icon: 'person' },
  ];

  constructor(private router: Router, private menu: MenuController) {}

  navigate(url: string) {
    this.router.navigate([url]);
    this.menu.close(); 
  }
} 
