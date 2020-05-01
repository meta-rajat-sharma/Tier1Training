/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('Assignment.EmpList.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'Assignment.EmpList.view.employeeList.EmployeeList',
        'Assignment.EmpList.view.main.MainController',
        'Assignment.EmpList.view.main.MainModel',
        'Assignment.EmpList.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    // tabBarPosition: 'bottom',
    cls: 'itemClass',
    items: [{
        title: 'Contact',
        iconCls: 'x-far fa-address-book',
        layout: 'fit',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'empList'
        }]
    }, {
        title: 'Users',
        iconCls: 'x-fa fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'x-fa fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'x-fa fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});