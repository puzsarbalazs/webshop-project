import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuItem} from "primeng/api";
import {faList, faTable, faTh, faThLarge, faThList} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() sortChange = new EventEmitter<string>();
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortByChange = new EventEmitter<string>();


  sort: string = "asc";
  sortBy = "id";
  itemsShowCount: number = 12;
  onePerRow = faThList;
  threePerRow =faThLarge;
  fourPerRow= faTh;


  showMenuItems: MenuItem[] = [
    {label: "12", command: event => this.onItemsUpdated(12)},
    {label: "24", command: event => this.onItemsUpdated(24)},
    {label: "36", command: event => this.onItemsUpdated(36)}
  ]

  descButton: MenuItem[] = [
    {label: "desc", icon: "pi pi-arrow-down", command: () => this.onSortUpdated('desc')},
    {label: "asc", icon: "pi pi-arrow-up", command: () => this.onSortUpdated('asc')}
  ];

  orderByButton: MenuItem[] = [
    {label: "id", icon: "pi pi-sort-numeric-down", command: () => this.onSortByUpdated('id')},
    {label: "price", icon: "pi pi-dollar", command: () => this.onSortByUpdated('price')},
    {label: "title", icon: "pi pi-sort-alpha-down", command: () => this.onSortByUpdated('title')}
  ]

  constructor() { }

  onSortUpdated(newSort: string): void {
      this.sort = newSort;
      this.sortChange.emit(newSort);
  }

  onSortByUpdated(newSortBy: string): void {
    this.sortBy = newSortBy;
    this.sortByChange.emit(newSortBy);
  }


  ngOnInit(): void {
  }

  private onItemsUpdated(count: number): void {
      this.itemsShowCount = count
      this.itemsCountChange.emit(count)
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum)
  }
}
