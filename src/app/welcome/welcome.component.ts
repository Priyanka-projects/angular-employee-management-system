import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  mArticles:Array<any>;
  mSources:Array<any>;
  constructor() { }

  ngOnInit(): void {

    this.mSources=["item 1","item2","item 3","item 4","item5"]
  }

}
