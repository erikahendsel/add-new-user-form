import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Roles } from './roles';
import {AssignedRoles} from './assigned-roles'



@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.scss']
})
export class AssignRoleComponent implements OnInit {
 
  @Input() assignRole: FormGroup;
  roles = AssignedRoles;
  selectedRole: Roles;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event: any, roles: Roles) {
    //selected role gets a hover
    this.selectedRole = roles;

    //Get li data-index value and pass it as a value to the form
    const dataIndex = event.target.attributes[2].value;
    const parseDataIndex = parseInt(dataIndex);
    this.assignRole.controls['role'].setValue(parseDataIndex);
  }

}
