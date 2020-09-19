import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
    providedIn: 'root'
})
export class AuthServiceService {

    constructor(private afAuth: AngularFireAuth) { }

    logOut() {
        return this.afAuth.signOut().then(a => {
            console.log('cerro sesion', a);

        }, err => console.log(err))
    }

}

