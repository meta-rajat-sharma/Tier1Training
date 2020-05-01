/**
 * @component left panel
 * @description
 * left panel is left side of the container where list is populated
 * This has a toolbar which contains the search and sort fields
 */

Ext.define('Layout.view.leftpanel.LeftPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'leftpanel',

    requires: [
        'Layout.view.employee.Employee',
        'Layout.view.leftpanel.LeftPanelController',
        'Layout.view.leftpanel.LeftPanelModel'
    ],

    controller: 'leftpanel-leftpanel',
    viewModel: {
        type: 'leftpanel-leftpanel'
    },
    scrollable: true,
    shadow: true,
    padding: '0px',
    title: 'List of Contacts',

    // Toolbar for the Search and Sorting fields
    items: [{
        xtype: 'toolbar',
        docked: 'top',
        layout: 'vbox',
        items: [{
            // Search field  
            xtype: 'textfield',
            placeHolder: 'Search',
            clearIcon: false,
            itemId: 'conSearch',
            style: 'margin-bottom: 4px; margin-top: 7px;margin-left: 2px;padding: 4px;'
        }, {
            // Sort field (select type)
            xtype: 'selectfield',
            label: 'Sort By :',
            listeners: {
                change: 'sortValue'
            },
            options: [{
                text: 'Name',
                value: 'Name'
            }, {
                text: 'Email',
                value: 'Email'
            }]
        }]
    }, {
        xtype: 'empList'
    }]
});