import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-sidebar-search',
  templateUrl: './sidebar-search.component.html',
  styleUrls: ['./sidebar-search.component.scss']
})
export class SidebarSearchComponent implements OnInit {
  searchedKey: string = '';

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.searchService.searchedWord = this.searchedKey;
  }

}
