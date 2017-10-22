import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the PrincipalMenuPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal-menu',
  templateUrl: 'principal-menu.html'
})
export class PrincipalMenuPage {

  menuRoot = 'MenuPage'
  perfilRoot = 'PerfilPage'


  constructor(public navCtrl: NavController) {}

}
