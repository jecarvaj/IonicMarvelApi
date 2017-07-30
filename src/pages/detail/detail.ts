import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ApiServiceProvider} from "../../providers/api-service/api-service";
import { InAppBrowser} from "@ionic-native/in-app-browser"



/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  comic;
  characters:any[]=[];


  constructor(public navCtrl: NavController, public apiService: ApiServiceProvider, private iab: InAppBrowser,public navParams: NavParams) {
    this.comic=this.navParams.get('id');
    this.getCharacters();


  }

  getCharacters() {
    console.log("HAY ->"+this.comic.characters.available)
    let cont=0;
    for(let item of this.comic.characters.items){
      this.apiService.getCharacters(item.resourceURI)
        .subscribe(
          data => {
            this.characters.push(data.data.results[0]);
            console.log("EN EL PUSHO ESTA "+this.characters[cont].thumbnail.path);
            cont++;

          }

        );
    }
  }

  goToCharacter(url){
    console.log("LA URL EDL CARACETR ES "+url);
    let options ='location=no,toolbar=yes,hidden=no';
    const browser = this.iab.create(url, "_blank", options);
    browser.show();
  }
}
