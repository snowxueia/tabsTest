import { Component, OnInit } from '@angular/core';

import { RegisterPage } from '../register/register.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {

   constructor(public navCtr1:NavController) {}

  goToRegister()
  {
    this.navCtr1.navigateForward('/register')
  }
}
/*
import { Component, OnInit } from '@angular/core';
import { RegisterPage } from '../register/register.page';
import { NavController } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { UserService } from '../user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
     username: string = ""
     password: string = ""

   constructor(public afAuth: AngularFireAuth, 
              public user: UserService, 
              public router: Router, 
              public navCtr1:NavController)
    {}
   ngOnInit(){}

   async login() {
		const { username, password } = this
		try {
			// kind of a hack. 
			const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com', password)
			
			if(res.user) {
				this.user.setUser({
					username,
					uid: res.user.uid
				})
				this.router.navigate(['/tabs'])
			}
		
		} catch(err) {
			console.dir(err)
			if(err.code === "auth/user-not-found") {
				console.log("User not found")
			}
		}

   





  goToRegister()
  {
    this.navCtr1.navigateForward('/register')
  }
}*/






