import {Component, ViewChild} from '@angular/core';
import {LoadingController, NavController } from 'ionic-angular';
import { ApiServiceProvider } from "../../providers/api-service/api-service";
import { DetailPage } from "../detail/detail"



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})

export class HomePage {
  comics: any[]=[];
  comicsCopy:any=[];
  ids:string[]=[];

  nameSearch:string;
  yearSearch:string="0";
  numsSearch:number;
  limit:number=20;
  offset:number=0;
  offsetSearch:number=0;

  statusSearch:boolean=false;
  searchBarStatusCheck:boolean=false;
  placeholder="Buscar título y/o año";
  loading;

  constructor(public navCtrl: NavController, public apiService: ApiServiceProvider, public loadingCtrl:LoadingController) {
    console.log("CONSTRUCTOR HOME");
    this.loading=this.loadingCtrl.create();
    this.loading.present();
    this.loadData();
  }

  showBar(){
    this.searchBarStatusCheck=!this.searchBarStatusCheck;
  }

  cancelBar(){
    this.comics=this.comicsCopy;
    this.showBar();

  }


  loadData(){

    console.log("LOAD DATA");
    this.apiService.getComics(0, this.limit)
      .subscribe(
        data => {
          this.loading.dismiss();
          this.comics = data.data.results;
          this.comicsCopy=this.comics;
        }
      );
  }


  getData(){
    let searchWithoutYear=[];

    for(let sr of this.nameSearch.split(" ")){
      if(sr.trim().match(/[1-2][0-9]{3}/)){
       this.yearSearch=sr;
      }else{
       searchWithoutYear.push(sr.trim());
      }
    }
    this.nameSearch=searchWithoutYear.join(" ");
    this.apiService.getByNameAndYear(this.nameSearch, this.offsetSearch, this.limit, this.yearSearch)
      .subscribe(
        data => {
          this.comics=data.data.results;
          this.numsSearch=data.data.total;
        }
      );
  }


  searchData(ev){
    this.nameSearch=ev.target.value;
    this.yearSearch="0";

    if(this.nameSearch && this.nameSearch.trim()!='' && this.nameSearch.length>2){
      this.statusSearch=true;
      this.getData();
    }else{
      this.statusSearch=false;
      this.offsetSearch=0;
      this.comics=this.comicsCopy;
    }
  }

  doInfinite(ev) {
    if(this.statusSearch){
      if(this.numsSearch>this.comics.length){
        this.offsetSearch+=this.limit;

        this.apiService.getByNameAndYear(this.nameSearch, this.offsetSearch, this.limit,this.yearSearch)
        .subscribe(
          data => {
            for(let item of data.data.results){
              this.comics.push(item);
            }
            this.numsSearch=data.data.total;
            ev.complete();
          }

          );
      }else{
        this.offsetSearch=0;
        ev.complete();
      }

    }else{
      this.offset+=this.limit;
      this.apiService.getComics(this.offset+1, this.limit)
        .subscribe(
          data => {
            for(let item of data.data.results){
              if(this.ids.indexOf(item.id)<0){
                this.comics.push(item);
                this.ids.push(item.id);
              }
            }
            ev.complete();
          }

        );
    }
  }

  goToDetail(id){
    this.navCtrl.push(DetailPage, {id:id})
  }

}
