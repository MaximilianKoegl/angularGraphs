import {Component, OnInit, Output} from '@angular/core';
import {libraries} from '../../models/libraries.model';
import {DataService} from '../../services/data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    class: 'app-navbar'
  }
})
export class NavbarComponent implements OnInit {
  selectedGraph: string;
  selectedLibrary: string = 'd3';
  public readonly  libraries = libraries;
  public readonly graphs = [
    'Line', 'Bar', 'PieChart', 'Map', 'AreaChart'
  ];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  onGraphClicked(graph){
    this.selectedGraph = graph;
    this.dataService.setData(graph);
  }

  onLibraryClicked(library) {
    this.selectedLibrary = library;
  }

}
