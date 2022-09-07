import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-llamada-avisos',
  templateUrl: './llamada-avisos.component.html',
  styleUrls: ['./llamada-avisos.component.css']
})
export class LlamadaAvisosComponent implements OnInit {
  public cssUrl:string;
  public titleAdvice:string;
  public advice:string;

  constructor(public sanitizer: DomSanitizer) {
    this.cssUrl='/assets/css/styles.css';
    this.titleAdvice="";
    this.advice=""
  }

  generarAvisos(){
    fetch('https://api.adviceslip.com/advice')
    .then(response=>response.json())
    .then(data=>{
      //Introducimos los datos de la api en las variables titleAdvice y en advice
      this.titleAdvice="ADVICE #"+data.slip.id
      this.advice='"'+data.slip.advice+'"'
    }
    
    )
    console.log(this.titleAdvice)
    console.log(this.advice)
  }
  
  ngOnInit(): void {
  }

}
