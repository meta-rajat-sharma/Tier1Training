/**
 * @component Right Panel
 * @description
 * This contains the Table format and the grids
 */

Ext.define('Layout.view.rightpanel.RightPanel', {
    extend: 'Ext.TabPanel',
    xtype: 'rightpanel',

    requires: [
        'Layout.view.rightpanel.RightPanelController',
        'Layout.view.rightpanel.RightPanelModel'
    ],

    controller: 'rightpanel-rightpanel',
    viewModel: {
        type: 'rightpanel-rightpanel'
    },

    cls: 'rightItemTabClass',
    items: [{
        xtype: 'grid',
        title: 'Student',
        itemId: 'StudentDetails',
        columns: [{
            xtype: 'templatecolumn',
            tpl: [
                '<tpl if="Name">{Name}',
                '<tpl else>Name Not available',
                '</tpl>'
            ],
            text: 'Name',
            // dataIndex: 'Name',
            sortable: false,
            flex: 1
        }, {
            text: '10th Grade Percentage',
            xtype: 'templatecolumn',
            // dataIndex: 'TenthPercent__c',
            tpl: [
                '<tpl if="TenthPercent__c">{TenthPercent__c}',
                '<tpl else>NIL',
                '</tpl>'
            ],
            sortable: false,
            flex: 1
        }, {
            text: '12th grade Percentage',
            tpl: [
                '<tpl if="TwelfthPercent__c">{TwelfthPercent__c}',
                '<tpl else>NIL',
                '</tpl>'
            ],
            sortable: false,
            flex: 1
        }]
    }, {
        xtype: 'grid',
        title: 'College',
        itemId: 'CollegeDetails',
        columns: [{
            text: 'College Name',
            tpl: [
                '<tpl if="CollegeName__c">{CollegeName__c}',
                '<tpl else>NA',
                '</tpl>'
            ],
            // dataIndex: 'CollegeName__c',
            sortable: false,
            flex: 1
        }, {
            text: 'Aggregate Percentage',
            tpl: [
                '<tpl if="CollegeAggregate__c">{CollegeAggregate__c}',
                '<tpl else>NA',
                '</tpl>'
            ],
            // dataIndex: 'CollegeAggregate__c',
            sortable: false,
            flex: 1
        }]
    }, {
        xtype: 'grid',
        title: 'Work Experience',
        itemId: 'CompanyDetails',
        columns: [{
            text: 'Company Name',
            tpl: [
                '<tpl if="CompanyName__c">{CompanyName__c}',
                '<tpl else>NA',
                '</tpl>'
            ],
            // dataIndex: 'CompanyName__c',
            sortable: false,
            flex: 1
        }, {
            text: 'Years of Experience',
            tpl: [
                '<tpl if="Experience__c">{Experience__c}',
                '<tpl else>NIL',
                '</tpl>'
            ],
            // dataIndex: 'Experience__c',
            sortable: false,
            flex: 1
        }]
    }]
});