import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Md5} from "ts-md5/dist/md5"


/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {


  /*---------------------------PARA CONECTAR A API---------------------------------------*/
  publicKey:string ="8d8b1c6968676071d05852ede59fd4a0";
  privateKey:string= "74d4882e05508b1ba353a936aa464eabced1719b";
  timestamp= Date.now();

  apiHash= Md5.hashStr(this.timestamp+this.privateKey+this.publicKey);

  tokenUrl:string = "?ts="+this.timestamp
    +"&apikey="+this.publicKey
    +"&hash="+this.apiHash;

  urlComics: string = "https://gateway.marvel.com/v1/public/comics"
                    + this.tokenUrl
                    + "&format=comic"
                    + "&hasDigitalIssue=true"
  /*------------------------------------------------------------------------------------*/

  data;

  constructor(public http: Http) {
    console.log('Hello UserServiceProvider Provider :');
  }


  getComics(offset, limit){
    console.log('EN GET COMIC');
    let url=this.urlComics+"&offset="+offset+"&limit="+limit;
    console.log("URL ES "+url);
    return this.http.get(url)
      .map(res => res.json());
  }

  getCharacters(url){
    return this.http.get(url+this.tokenUrl)
      .map(res => res.json());
  }

  getByNameAndYear(name, offset, limit, year){
    let url;
    if(year==0){
      url=this.urlComics+"&titleStartsWith="+name+"&offset="+offset+"&limit="+limit;
    }else if(name!=""){
      url=this.urlComics+"&titleStartsWith="+name+"&offset="+offset+"&limit="+limit+"&startYear="+year;
    }else{
      url=this.urlComics+"&offset="+offset+"&limit="+limit+"&startYear="+year;
    }

    return this.http.get(url)
          .map(res => res.json());
  }




}
