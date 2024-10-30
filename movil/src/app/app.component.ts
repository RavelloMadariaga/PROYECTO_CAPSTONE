import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class AppComponent implements OnInit {
  constructor(private dbService: DatabaseService) {}
  ngOnInit() {
    // Inicializa la conexión a la base de datos al cargar la app
    this.dbService.initializeDatabase();
  }
}