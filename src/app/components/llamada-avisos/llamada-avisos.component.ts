import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-llamada-avisos',
  templateUrl: './llamada-avisos.component.html',
  styleUrls: ['./llamada-avisos.component.css']
})
export class LlamadaAvisosComponent implements OnInit {
  cssUrl:string;
  constructor(public sanitizer: DomSanitizer) {
    this.cssUrl='/assets/css/styles.css';
  }
  
  ngOnInit(): void {
  }

}
