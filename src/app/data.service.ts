import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  employee = [
    {
      id: 1,
      name: 'John Smith',
      position: 'Manager',
      salary: 50000,
      department: 'Sales',
      hire_date: '2022-01-15',
      email: 'john.smith@example.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      position: 'Assistant',
      salary: 35000,
      department: 'Human Resources',
      hire_date: '2022-03-10',
      email: 'jane.doe@example.com',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      position: 'Developer',
      salary: 45000,
      department: 'IT',
      hire_date: '2021-09-20',
      email: 'michael.johnson@example.com',
    },
    {
      id: 4,
      name: 'Emily Williams',
      position: 'Designer',
      salary: 40000,
      department: 'Marketing',
      hire_date: '2023-02-05',
      email: 'emily.williams@example.com',
    },
    {
      id: 5,
      name: 'David Anderson',
      position: 'Engineer',
      salary: 55000,
      department: 'Engineering',
      hire_date: '2022-07-01',
      email: 'david.anderson@example.com',
    },
    {
      id: 6,
      name: 'Sarah Thompson',
      position: 'Analyst',
      salary: 38000,
      department: 'Finance',
      hire_date: '2023-04-12',
      email: 'sarah.thompson@example.com',
    },
    {
      id: 7,
      name: 'Robert Johnson',
      position: 'Manager',
      salary: 52000,
      department: 'Sales',
      hire_date: '2023-01-02',
      email: 'robert.johnson@example.com',
    },
    {
      id: 8,
      name: 'Jennifer Lee',
      position: 'Assistant',
      salary: 32000,
      department: 'Human Resources',
      hire_date: '2022-11-20',
      email: 'jennifer.lee@example.com',
    },
    {
      id: 9,
      name: 'Daniel Brown',
      position: 'Developer',
      salary: 47000,
      department: 'IT',
      hire_date: '2023-03-15',
      email: 'daniel.brown@example.com',
    },
    {
      id: 10,
      name: 'Olivia Davis',
      position: 'Designer',
      salary: 42000,
      department: 'Marketing',
      hire_date: '2022-08-10',
      email: 'olivia.davis@example.com',
    },
  ];
  index = 0;
  constructor() {}

  setIndex(i: number) {
    this.index = i;
    console.log('setIndex: ', this.index);
  }

  getIndex() {
    console.log('getIndex: ', this.index);
    return this.index;
  }

  getData() {
    return this.employee;
  }
}
