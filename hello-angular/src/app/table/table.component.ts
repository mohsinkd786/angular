import { Component, OnInit } from '@angular/core';
import { TableService } from "../table.service";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private service : TableService) { }
  
  private data:any[];
  private isData:Boolean =false;

  ngOnInit() {
    this.data = this.service.getData(5,10)
  }
  loadData(_number:string,_limit:string){
    this.data = this.service.getData(parseInt(_number),parseInt(_limit))
    this.isData = true
  }
}
