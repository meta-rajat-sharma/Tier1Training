/**
 * @component Right Panel Controller
 * @description
 * This controller has the functionalities for populating the data into table grids
 */

Ext.define('Layout.view.rightpanel.RightPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.rightpanel-rightpanel',


    init: function() {

        // For the Student Table
        let studentList = this.getView().down('#StudentDetails');
        client.query('select Name,TenthPercent__c,TwelfthPercent__c from Contact', function(response) {
            studentList.setData(response.records);
        });

        // For the College Table
        let collegeList = this.getView().down('#CollegeDetails');
        client.query('select CollegeName__c,CollegeAggregate__c from Contact', function(response) {
            collegeList.setData(response.records);
        });

        // For the Company Table
        let companyList = this.getView().down('#CompanyDetails');
        client.query('select CompanyName__c,Experience__c from Contact', function(response) {
            companyList.setData(response.records);
        });
    }

});