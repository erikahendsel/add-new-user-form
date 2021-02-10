import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-permissions',
  templateUrl: './custom-permissions.component.html',
  styleUrls: ['./custom-permissions.component.scss']
})
export class CustomPermissionsComponent implements OnInit {
  public showTableOne:boolean = false;
  public showTableTwo:boolean = false;
  public buttonName:any = 'SHOW';
  constructor() { }

  ngOnInit(): void {
  }
  toggleFirstTable() {
    this.showTableOne = !this.showTableOne;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showTableOne)  
      this.buttonName = "HIDE";
    else
      this.buttonName = "SHOW";
  }
  toggleSecondTable() {
    this.showTableTwo = !this.showTableTwo;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showTableTwo)  
      this.buttonName = "HIDE";
    else
      this.buttonName = "SHOW";
  }

}
