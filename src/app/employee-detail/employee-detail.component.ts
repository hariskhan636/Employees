import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  employees: any = [];
  index = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.employees = this.dataService.getData();
    this.index = this.dataService.getIndex();
  }
}
