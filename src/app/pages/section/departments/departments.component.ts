import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
  departmentSelection(){
    this.departmentSectionView = false
  }
  

  @Input() departmentSectionView = true
}
