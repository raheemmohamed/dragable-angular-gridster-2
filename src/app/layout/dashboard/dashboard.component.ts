import {
  GridsterConfig,
   GridsterItem,
   GridType,
   CompactType,
   DisplayGrid,
  GridsterItemComponentInterface } from 'angular-gridster2';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {
  options: GridsterConfig;
  dashboard;
  itemChanged;
  globalItemchange;
  dynamicSelector;
  htmlstr = `<app-` + this.dynamicSelector + `></app-` + this.dynamicSelector + `>`;

  ngOnInit() {
    this.customizableDashboard();
  }

  customizableDashboard() {
    this.options = {
      gridType: GridType.ScrollVertical,
      compactType: CompactType.CompactUp,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 6,
      minRows: 2,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 200,
      fixedRowHeight: 200,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      swap: true,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: {north: true, east: true, south: true, west: true},
      pushResizeItems: true,
      displayGrid: DisplayGrid.None,
      disableWindowResize: false,
      disableWarnings: true,
      setGridSize: false,
      scrollToNewItems: true,
      itemResizeCallback: this.itemResize,
    };

    this.dashboard = [
      {cols: 2, rows: 2, y: 0, x: 0,
        hasContent: true,
        chartType: 'barChart',
        title: 'widget 1'},
      {cols: 2, rows: 2, y: 0, x: 2, hasContent: true , chartType: 'lineChart',
      title: 'widget 2'},
      {cols: 1, rows: 1, y: 0, x: 4, hasContent: true, title: 'widget 3'},
      {cols: 1, rows: 1, y: 0, x: 5, hasContent: true, title: 'widget 4'},
      {cols: 1, rows: 1, y: 1, x: 0,  hasContent: true, title: 'widget 5'},
      {cols: 1, rows: 1, y: 1, x: 0,  hasContent: true, title: 'widget 6'}
    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
    console.log(this.options);
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 2, rows: 2, hasContent: true, title: 'New widget'});
    console.log(this.dashboard);
  }

  itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
     console.log('itemResized', item, itemComponent);
  }

}
