import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: any;
  searchTerm: any;
  constructor(private dataService: DataService) {
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }

  ngOnInit(){
    this.setFilteredItems();
  }
}
