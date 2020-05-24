import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data-service.service';

@Component({
  selector: 'app-angular-google-charts',
  templateUrl: './angular-google-charts.component.html',
  styleUrls: ['./angular-google-charts.component.css']
})
export class AngularGoogleChartsComponent implements OnInit {
  data = [
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350]
  ];

  columns = ['Year', 'Sales', 'Expenses', 'Profit'];

  get Graph() {
    return this.dataService.getData();
  }

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
  }

}
