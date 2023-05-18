import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: any = [];
  details = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.employees = this.dataService.getData();
    console.log(this.employees);
  }

  showDetails(i: number) {
    this.dataService.setIndex(i);
    this.details = true;
  }
}
