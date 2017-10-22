import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PrincipalMenuPage} from '../principal-menu/principal-menu'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toTab(){
    this.navCtrl.push(PrincipalMenuPage);
  }

}
