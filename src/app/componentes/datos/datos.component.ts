import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss'],
})
export class DatosComponent implements OnInit {

  constructor() { }



  nextPage = "";
   lastPage ="";
   currentApiURL =`https://rickandmortyapi.com/api/character`;



  //apiResponse: Apimodels.ApiRickResponse | undefined;
  //vm!: RickDataVM;
  total:number | undefined;
  nombre:String[]=[];
  Estado:string[]=[];
  Especie:String[]=[];
  imagen: string[]=[];
  numero:number[]=[];





  ngOnInit() {

   // this.apiResponse=<Apimodels.ApiRickResponse>{};
   // this.vm =<RickDataVM>{}
    this.getRickData();
   // this.hola();

  }

next() {
    this.currentApiURL = this.nextPage;
    debugger;

    this.getRickData();


}

back() {
  this.currentApiURL = this.lastPage;
  debugger;
  this.getRickData();

}





  getRickData(){


    fetch(this.currentApiURL)
    .then(response=>response.json())
    .then((data)=> {


      //this.total=data.results.length;
     this.show(data);

      //this.next(data);

      debugger;

    })

  }

   show( data: { results: string | any[]; info: { next: any; prev: string; }; }){

    for(var i=0; i< data.results.length; i++){

          var currentItem = data.results[i];

          this.nombre[i]= currentItem.name;
           this.Especie[i]=currentItem.species;
          this.Estado[i]=currentItem.status;


      this.imagen[i]= currentItem.image;


       debugger;

    }

      this.nextPage=data.info.next;
      this.lastPage=data.info.prev;



      }












}
