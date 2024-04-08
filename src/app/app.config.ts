import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"mattone-56d50","appId":"1:432110022809:web:09fc1d3883b75a6bf6c808","storageBucket":"mattone-56d50.appspot.com","apiKey":"AIzaSyBfhj5jqsR0HSN8bhQshqMZZOwN9U124Uw","authDomain":"mattone-56d50.firebaseapp.com","messagingSenderId":"432110022809"}))), importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimationsAsync()]
};
