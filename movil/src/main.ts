import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { addIcons } from 'ionicons';
import { SQLite } from '@ionic-native/sqlite/ngx';

const icons = {
  home: 'home',
  person: 'person', 
  barbell: 'barbell', 
  restaurant: 'restaurant', 
  'account login': 'log-in', 
  'information-circle': 'information-circle',
  menu: 'menu'
};

addIcons(icons);

defineCustomElements(window);

bootstrapApplication(AppComponent, {
  providers: [SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
