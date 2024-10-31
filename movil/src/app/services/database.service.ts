import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dbInstance: SQLiteObject | null = null; 
  readonly db_name: string = 'DB NutriMove.db';

  constructor(private sqlite: SQLite, private platform: Platform) {
    this.platform.ready().then(() => {
      this.initializeDatabase();
    });
  }

  async initializeDatabase() {
    try {
      this.dbInstance = await this.sqlite.create({
        name: this.db_name,
        location: 'default'
      });
      console.log('Base de datos conectada', this.dbInstance);
    } catch (error) {
      console.error('Error al conectar la base de datos:', error);
    }
  }

  // Tabla: usuario
  async insertUsuario(user: any) {
  if (!this.dbInstance) {
    console.error('Base de datos no inicializada');
    return; 
  }
    const query = `INSERT INTO usuario (rut, nombre_user, contrasena, email, nombre, apellido_pat, apellido_mat, peso, estatura, edad, id_rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 2)`;
    const data = [user.rut, user.nombre_user, user.contrasena, user.email, user.nombre, user.apellido_pat, user.apellido_mat, user.peso, user.estatura, user.edad, user.id_rol];
    try {
      await this.dbInstance.executeSql(query, data);
      console.log('Usuario insertado');
    } catch (error) {
      console.error('Error al insertar usuario:', error);
    }
  }

  async getUsuarios() {
    if (!this.dbInstance) {
      return console.error('Base de datos no inicializada'); 
    } 
    const query = `SELECT * FROM usuario`;
    try {
      const res = await this.dbInstance.executeSql(query, []);
      const usuarios = [];
      for (let i = 0; i < res.rows.length; i++) {
        usuarios.push(res.rows.item(i));
      }
      return usuarios;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  }

  async updateUsuario(user: any) {
    if (!this.dbInstance) {
      console.error('Base de datos no inicializada');
      return; 
    }
    const query = `UPDATE usuario SET rut = ?, nombre_user = ?, contrasena = ?, email = ?, nombre = ?, apellido_pat = ?, apellido_mat = ?, peso = ?, estatura = ?, edad = ?, id_rol = ? WHERE id_user = ?`;
    const data = [user.rut, user.nombre_user, user.contrasena, user.email, user.nombre, user.apellido_pat, user.apellido_mat, user.peso, user.estatura, user.edad, user.id_rol, user.id_user];
    try {
      await this.dbInstance.executeSql(query, data);
      console.log('Usuario actualizado');
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
    }
  }

  async deleteUsuario(id: number) {
    if (!this.dbInstance) {
      console.error('Base de datos no inicializada');
      return; 
    }
    const query = `DELETE FROM usuario WHERE id_user = ?`;
    try {
      await this.dbInstance.executeSql(query, [id]);
      console.log('Usuario eliminado');
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  }
  // Tabla: ejercicio
  async insertEjercicio(ejercicio: any) {
    if (!this.dbInstance) {
      console.error('Base de datos no inicializada');
      return ; 
    }
    const query = `INSERT INTO ejercicios (nombre_ejercicio, descripcion, repeticiones) VALUES (?, ?, ?)`;
    const data = [ejercicio.nombre_ejercicio, ejercicio.descripcion, ejercicio.repeticiones];
    try {
      await this.dbInstance.executeSql(query, data);
      console.log('Ejercicio insertado');
    } catch (error) {
      console.error('Error al insertar ejercicio:', error);
    }
  }

  async getEjercicios() {
    if (!this.dbInstance) {
      return console.error('Base de datos no inicializada'); 
    }
    const query = `SELECT * FROM ejercicios`;
    try {
      const res = await this.dbInstance.executeSql(query, []);
      const ejercicios = [];
      for (let i = 0; i < res.rows.length; i++) {
        ejercicios.push(res.rows.item(i));
      }
      return ejercicios;
    } catch (error) {
      console.error('Error al obtener ejercicios:', error);
    }
  }

  async updateEjercicio(ejercicio: any) {
    if (!this.dbInstance) {
      console.error('Base de datos no inicializada');
      return; 
    }
    const query = `UPDATE ejercicios SET nombre_ejercicio = ?, descripcion = ?, repeticiones = ? WHERE id_ejercicio = ?`;
    const data = [ejercicio.nombre_ejercicio, ejercicio.descripcion, ejercicio.repeticiones, ejercicio.id_ejercicio];
    try {
      await this.dbInstance.executeSql(query, data);
      console.log('Ejercicio actualizado');
    } catch (error) {
      console.error('Error al actualizar ejercicio:', error);
    }
  }

  async deleteEjercicio(id: number) {
    if (!this.dbInstance) {
      console.error('Base de datos no inicializada');
      return; 
    }
    const query = `DELETE FROM ejercicios WHERE id_ejercicio = ?`;
    try {
      await this.dbInstance.executeSql(query, [id]);
      console.log('Ejercicio eliminado');
    } catch (error) {
      console.error('Error al eliminar ejercicio:', error);
    }
  }

  // Tabla: estadisticas
  async insertEstadistica(estadistica: any) {
    if (!this.dbInstance) {
      console.error('Base de datos no inicializada');
      return; 
    }
    const query = `INSERT INTO estadisticas (date_recorded, sesiones_completadas, total_sesiones, porcentaje_de_mejora, tiem_total_ent, heart_rate, imc) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const data = [estadistica.date_recorded, estadistica.sesiones_completadas, estadistica.total_sesiones, estadistica.porcentaje_de_mejora, estadistica.tiem_total_ent, estadistica.heart_rate, estadistica.imc];
    try {
      await this.dbInstance.executeSql(query, data);
      console.log('Estadística insertada');
    } catch (error) {
      console.error('Error al insertar estadística:', error);
    }
  }

  async getEstadisticas() {
    if (!this.dbInstance) {
      return console.error('Base de datos no inicializada'); 
    }
    const query = `SELECT * FROM estadisticas`;
    try {
      const res = await this.dbInstance.executeSql(query, []);
      const estadisticas = [];
      for (let i = 0; i < res.rows.length; i++) {
        estadisticas.push(res.rows.item(i));
      }
      return estadisticas;
    } catch (error) {
      console.error('Error al obtener estadísticas:', error);
    }
  }

  async updateEstadistica(estadistica: any) {
    if (!this.dbInstance) {
      console.error('Base de datos no inicializada');
      return; 
    }
    const query = `UPDATE estadisticas SET date_recorded = ?, sesiones_completadas = ?, total_sesiones = ?, porcentaje_de_mejora = ?, tiem_total_ent = ?, heart_rate = ?, imc = ? WHERE id_ent = ?`;
    const data = [estadistica.date_recorded, estadistica.sesiones_completadas, estadistica.total_sesiones, estadistica.porcentaje_de_mejora, estadistica.tiem_total_ent, estadistica.heart_rate, estadistica.imc, estadistica.id_ent];
    try {
      await this.dbInstance.executeSql(query, data);
      console.log('Estadística actualizada');
    } catch (error) {
      console.error('Error al actualizar estadística:', error);
    }
  }

  async deleteEstadistica(id: number) {
    if (!this.dbInstance) {
      console.error('Base de datos no inicializada');
      return; 
    }
    const query = `DELETE FROM estadisticas WHERE id_ent = ?`;
    try {
      await this.dbInstance.executeSql(query, [id]);
      console.log('Estadística eliminada');
    } catch (error) {
      console.error('Error al eliminar estadística:', error);
    }
  }

  // tabla restante: resumen, roles, rutina, rutina_ejercicios, rutina_usuario, soporte
}

