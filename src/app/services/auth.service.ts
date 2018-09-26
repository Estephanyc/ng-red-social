<<<<<<< 6522809a01554349b059aa25adf1fe1d54f125e7
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  user: any = null;
  constructor(private firebaseAuth: AngularFireAuth) {
    // this.user = firebaseAuth.authState;
    this.firebaseAuth.authState.subscribe((auth) => {
      this.user = auth;

    });
  }

  signup(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.firebaseAuth.auth.signOut()
  }

  facebookLogin() {

    return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())

  }

  googleLogin() {

    let provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('profile');
    provider.addScope('email');
    return this.firebaseAuth.auth
      .signInWithPopup(provider)

  }
}
=======
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   user: any = null;
   constructor(private firebaseAuth:AngularFireAuth) {
    // this.user = firebaseAuth.authState;
     this.firebaseAuth.authState.subscribe((auth) => {
       this.user = auth;

     });
  }

  signup(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.firebaseAuth.auth.signOut()
  }
}
>>>>>>> subir imagenes en el post
