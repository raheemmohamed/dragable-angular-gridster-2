import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
// import * as Highcharts from 'highcharts';
import {Highcharts} from '../../shared/global-imports';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() gristerChanged;

  constructor() { }

  ngOnInit() {
  }

  chartIni() {
     Highcharts.chart('container', {
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Fruit Consumption'
          },
          xAxis: {
              categories: ['Apples', 'Bananas', 'Oranges']
          },
          yAxis: {
              title: {
                  text: 'Fruit eaten'
              }
          },
          series: [{
              name: 'Jane',
              data: [1, 0, 4]
          },
           {
              name: 'John',
              data: [5, 7, 3]
          }],

      });
  }

  ngAfterViewInit() {
    this.chartIni();
  }

  ngOnChanges(changes: SimpleChanges) {
    const chng = changes[this.gristerChanged];
    if (chng ) {
    }
    // setInterval(() => { this.chartIni(); }, 1000);
    console.log('something changed', chng);
  }

}
