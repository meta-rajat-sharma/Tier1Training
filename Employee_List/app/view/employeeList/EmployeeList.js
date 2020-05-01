Ext.define('Assignment.EmpList.view.employeeList.EmployeeList', {
    extend: 'Ext.List',
    widget: 'widget.employeeList',

    xtype: 'empList',
    store: { xtype: 'empStore' },

    requires: [
        'Assignment.EmpList.view.employeeList.EmployeeListController',
        'Assignment.EmpList.view.employeeList.EmployeeListModel',
        'Assignment.EmpList.store.Personnel'
    ],

    controller: 'employeelist-employeelist',
    viewModel: {
        type: 'employeelist-employeelist'
    },

    // items: [{
    //         xtype: 'searchfield',
    //         name: 'query',
    //         itemId: 'search'
    //     },
    //     {
    //         xtype: 'list',
    //         itemId: 'employees',
    //         itemTpl: '<div class="main" style="display:flex;justify-content:center;margin-left: 40px;margin-bottom:6px;"><div class="imageDiv" style="flex:2;"><img src="{proPic__c}" style="border-radius: 50%; height:88px;width: 120px;"/></div><div class="textDiv" style="flex:9;"><p style="font-weight:bold;">{Name}</p><p>{Email}</p></div></div>'
    //             // store: Ext.create('HelloWorld.store.Personnel'),
    //             // store: 'AccountStore',
    //             // emptyText: '<h1>No data Available</h1>'
    //     }
    // ]
    itemId: 'employees',

    itemTpl: ['<div class="main" style="display:flex;justify-content:center;margin-left: 40px;margin-bottom:6px;">',
        '<div class="imageDiv" style="flex:1;">',
        '<tpl if="proPic__c">',
        '<img src="{proPic__c}" style="border-radius: 50%; height:40px;"/>',
        '<tpl else>',
        '<img src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style="border-radius: 50%; height:40px;"/>',
        '</tpl>',
        '</div>',
        '<div class="textDiv" style="flex:9;">',
        '<p style="font-weight:bold;">{Name}</p>',
        '<tpl if="Email !== \'null\'">{Email}</tpl>',
        '</div>',
        '</div>'
    ]

    // itemTpl: [

    // ],

    // itemTpl: [
    //     '<img src="{proPic__c}" style="border-radius: 50%; height:40px;"/>' +
    //     '<tpl if="Name">' +
    //     '<p style="font-weight:bold;">{Name}</p>' +
    //     '</tpl>' +
    //     '<tpl if="Email != \'null\'">' +
    //     '<p>{Email}</p>' +
    //     '</tpl>'
    // ]
});
// var tpl = new Ext.XTemplate(

// );