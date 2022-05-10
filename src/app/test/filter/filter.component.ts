import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
tableData:any=[
  {"name":"xyz","category":"abc","price":100,"createdDate":"2022-04-01"},
  {"name":"abc","category":"abc","price":300,"createdDate":"2022-05-01"},
  {"name":"def","category":"abc","price":400,"createdDate":"2022-05-05"},
  {"name":"ghi","category":"xyz","price":500,"createdDate":"2022-04-06"},
  {"name":"jkl","category":"xyz","price":600,"createdDate":"2022-05-08"},
  {"name":"mno","category":"xyz","price":700,"createdDate":"2022-05-01"},
  {"name":"pqr","category":"xyz","price":800,"createdDate":"2022-04-02"}
];
categories:any=[{name:'abc'},{name:'xyz'}]
tableDatas:any=[];
priceSlot:any=[{minValue:0,maxValue:500,slot:1},{minValue:500,maxValue:1000,slot:2}]
  constructor() { }

  ngOnInit(): void {
this.tableDatas=this.tableData;

  }
  filterByName(e:any){
    // console.log(e);
    this.tableDatas=this.tableData.filter((res:any)=>res.name.toLowerCase().includes(e.target.value));
  }
  filterByCategory(e:any){
    this.tableDatas=this.tableData.filter((res:any)=>res.category.toLowerCase().includes(e.target.value));

  }
  filterByDate(e:any){
    this.tableDatas=this.tableData.filter((res:any)=>res.createdDate.toLowerCase().includes(e.target.value));
  }
  filterByPrice(e:any){
    console.log(e.target.value)
    // let price=this.priceSlot.find((event:any)=>event.slot==e.target.value)
    this.tableDatas=this.tableData.filter((res:any)=>res.price>e.target.value );

  }
  filterByMinPrice(e:any){
    console.log(e.target.value)
    // let price=this.priceSlot.find((event:any)=>event.slot==e.target.value)
    this.tableDatas=this.tableData.filter((res:any)=>res.price<e.target.value );

  }
}
