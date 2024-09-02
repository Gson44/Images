import { Component, OnInit } from '@angular/core';
//import { QuittingService } from '../quitting.service';
import { QuittingContent } from '../quittingcontent';
import { isEmpty } from 'rxjs';
import data from ".././db.json";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  
})
export class CardComponent implements OnInit {
  dataName: QuittingContent[] = [];
  /*constructor(private quittingService: QuittingService){
    console.log(data);
  }

  async ngOnInit(){
    try{
      if(this.dataName.length == 0){
        this.dataName = await this.quittingService.getAllQuittingContents();
        console.log("Length is  " + this.dataName.length)
      }
      
    }catch(error) {
      console.error("Error fetching quitting content:", error);
    }
    
  }

  trackByFn(item: { id: any; }) {
    return item.id; // or whatever uniquely identifies your items
  }
  */
 constructor(){
  console.log(this.dataName);
 }
 ngOnInit(): void{
  try{
    this.dataName = data.quitting;
    
  }catch(error) {
    console.error("Error fetching quitting content:", error);
  }
  
}

}
