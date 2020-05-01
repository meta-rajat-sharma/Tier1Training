/**
 * @component Employee
 * @description
 * This snippet contains view side of Employee where it has Employee List Template
 */

Ext.define('Layout.view.employee.Employee', {
    extend: 'Ext.List',
    xtype: 'empList',


    requires: [
        'Layout.view.employee.EmployeeController',
        'Layout.view.employee.EmployeeModel'
    ],

    controller: 'employee-employee',
    viewModel: {
        type: 'employee-employee'
    },

    itemId: 'employeeList',
    itemTpl: [
        '<div class="main">',
        '<div class="mainImageDiv">',
        '<tpl if="proPic__c">',
        '<img class="empProfileImage" src="{proPic__c}"/>',
        '<tpl else>',
        '<img class="empProfileImage" src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>',
        '</tpl>',
        '</div>',
        '<div class="textDiv">',
        '<p class="namePara">{Name}</p>',
        '<tpl>{Email}</tpl>',
        '</div>',
        '</div>'
    ]
});