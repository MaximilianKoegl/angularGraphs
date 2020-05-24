import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  styleUrls: ['./ngx-charts.component.css']
})
export class NgxChartsComponent implements OnInit {
  single: any[] =   [{
    name: 'Germany',
    value: 8940000
  },
{
  name: 'USA',
  value: 5000000
},
{
  name: 'France',
  value: 7200000
}
];

view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  yAxisLabel = 'Country';
  showYAxisLabel = true;
  xAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
