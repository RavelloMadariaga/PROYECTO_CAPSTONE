import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{  IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {IonicModule} from '@ionic/angular';
import { DatabaseService } from '../services/database.service';
import {Usuario} from '../services/modelos.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroPage implements OnInit {
    user: Usuario = new Usuario(); 

    constructor(private dbService: DatabaseService) {}
  
    ngOnInit() {
      // Puedes llamar a obtener usuarios si lo necesitas al iniciar
      this.loadUsuarios();
    }
  
    async loadUsuarios() {
      const usuarios = await this.dbService.getUsuarios();
      console.log('Usuarios:', usuarios);
    }
  
    onSubmit() {
      this.dbService.insertUsuario(this.user).then(() => {
        console.log('Usuario insertado:', this.user);
      });
    }
  

}
