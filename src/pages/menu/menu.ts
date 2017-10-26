import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DuchaControlPage} from '../ducha-control/ducha-control';
import{EcoModePage} from '../eco-mode/eco-mode';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  irDucha(){
    this.navCtrl.push(DuchaControlPage);

  }

   irEco(){
    this.navCtrl.push(EcoModePage);

  }
}
