import { Component, OnInit } from '@angular/core';
import { EChartOption} from 'echarts';
import {DataService} from '../../../services/data-service.service';
@Component({
  selector: 'app-ngx-echarts',
  templateUrl: './ngx-echarts.component.html',
  styleUrls: ['./ngx-echarts.component.css']
})
export class NgxEchartsComponent implements OnInit {
  chartOption: EChartOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: this.dataService.getData().toLowerCase(),
      },
    ],
  };

  constructor(
    private readonly dataService: DataService
  ) { }

  ngOnInit(): void {
  }

}
