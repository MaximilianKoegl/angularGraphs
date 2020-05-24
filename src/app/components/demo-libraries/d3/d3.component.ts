import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data-service.service';

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})
export class D3Component implements OnInit {

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
  }

}
