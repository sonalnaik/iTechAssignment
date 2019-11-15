import { Component, OnInit } from '@angular/core';
import { CsvService } from '../csv.service'

@Component({
  selector: 'app-tablecard',
  templateUrl: './tablecard.component.html',
  styleUrls: ['./tablecard.component.css']
})
export class TablecardComponent implements OnInit {
  finalData:any=[]; view=true;
  constructor(private csvservice:CsvService) { }

  ngOnInit() {
    this.fetchDetails();
  }


  /*Author :Sonal Naik
  * This function will be used to extact data from csv file 
  * and to push it into array so that we can display it 
  * on UI
  */
  fetchDetails(){
    this.csvservice.fetchCsvDetails().subscribe(
      (csvdata:any)=>{
        console.log(csvdata);
        let textArray = csvdata.split(/\r|\n|\r/);
        //console.log(textArray);
        let header=textArray[0].split(',');
        let subArray={}
        for(let i=1;i<textArray.length;i++){
          let splitData=textArray[i].split(',');
         for(let j=0;j<header.length;j++){
          subArray[header[j]]=splitData[j];
         }
        
         this.finalData.push(subArray);
         
         subArray={};
         
        }
        this.finalData.pop();
        console.log(this.finalData);
      },

      (err) => console.log("unable to fetch->",err)
    )
  }

  toggleViews(){
    this.view=!this.view;
  }
}
