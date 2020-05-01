/**
 * @description
 * This contains the controller for the employee view
 */

Ext.define('Layout.view.employee.EmployeeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-employee',

    /**
     * @function invoked in the beginning of the code execution
     * This is used to make rest call to Visualforce page and get the required data
     */
    init: function() {
        let list = this.getView();

        client.query('Select Name,Email,proPic__c from Contact', function(response) {
            list.setData(response.records);
        });
    }

});