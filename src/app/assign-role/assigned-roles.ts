import {Roles} from './roles'

export const AssignedRoles: Roles[] = [
    {role: 'Admin', task: 'Can edit and view everything in the application', selected: false},
    {role: 'Manager', task: 'Can view TPs, analysis, reports, dashboards, conversations', selected: false},
    {role: 'Employee', task: 'Has access only to personally assigned data', selected: false},
]