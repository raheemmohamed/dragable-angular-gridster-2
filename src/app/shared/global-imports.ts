
// require for highchart
export const Highcharts = require('highcharts');
// Load module after Highcharts is loaded
export const HighCharsModule = require('highcharts/modules/exporting')(Highcharts);
import theme from 'highcharts/themes/dark-unica';
declare var require: any;

theme(Highcharts);
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

