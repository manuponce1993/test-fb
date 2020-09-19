import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseUIModule } from 'firebaseui-angular';
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { RouterModule } from '@angular/router';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBjMPdUqfBkFZWgEIQ3KbmXBYkKgvlCN0E",
    authDomain: "test-auth-aafe1.firebaseapp.com",
    databaseURL: "https://test-auth-aafe1.firebaseio.com",
    projectId: "test-auth-aafe1",
    storageBucket: "test-auth-aafe1.appspot.com",
    messagingSenderId: "508921332283",
    appId: "1:508921332283:web:227bbc9da965eb6a13d21e",
    measurementId: "G-C078BMCPG4"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const firebaseUiAuthConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
            scopes: [
                'public_profile',
                'email',
                'user_likes',
                'user_friends'
            ],
            customParameters: {
                'auth_type': 'reauthenticate'
            },
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
        },
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        {
            requireDisplayName: false,
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
        },
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    tosUrl: '<your-tos-link>',
    privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
    credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxAuthFirebaseUIModule.forRoot(firebaseConfig),
        // AngularFireModule.initializeApp(firebaseConfig),
        // AngularFireAuthModule,
        // FirebaseUIModule.forRoot(firebaseUiAuthConfig)
        RouterModule.forRoot([]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
