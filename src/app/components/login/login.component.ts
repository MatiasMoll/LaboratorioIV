import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  	public usrName:string;
	public usrPass:string;

	constructor(
		public fireAuth:AngularFireAuth,
		public router:Router,
		public authService: AuthService
	) {
			
	}

	ngOnInit() {
	}

	loginWithGoogle(){
		this.authService.GoogleAuth();
	}

	login(){
		this.fireAuth.signInWithEmailAndPassword(this.usrName,this.usrPass)
		.then(()=>{
			this.router.navigate(['bienvenido']);
		})
		.catch((res)=>{
			alert(res);
			this.router.navigate(['error']);
		});
		this.clearInputs();
	}        
	clearInputs(){
		this.usrName = "";
		this.usrPass = "";
	}
	volverHome(){
		this.router.navigate(['/']);
	}
	fillInputs(){
		this.usrName = "test@gmail.com";
		this.usrPass = "isanoe20";
	}
}
