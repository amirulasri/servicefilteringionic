import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: any;
  constructor() {
    this.items = [
      {title: "Kelantan"},
      {title: "Terengganu"},
      {title: "Perak"},
      {title: "Selangor"},
      {title: "Kuala Lumpur"},
    ];
  }

  filterItems(searchTerm:any = "") {
    return this.items.filter((item:any) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
