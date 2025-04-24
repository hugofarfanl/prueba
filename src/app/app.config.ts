import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "prueba-5da28", appId: "1:1039441804444:web:379fac81293758ddd88159", storageBucket: "prueba-5da28.firebasestorage.app", apiKey: "AIzaSyD6IMRXxQmykbawdGFnoeRppL_sj0rBeXM", authDomain: "prueba-5da28.firebaseapp.com", messagingSenderId: "1039441804444", measurementId: "G-PHKR0FMNYK" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
