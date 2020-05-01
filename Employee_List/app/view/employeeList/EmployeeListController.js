Ext.define('Assignment.EmpList.view.employeeList.EmployeeListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employeelist-employeelist',

    init: function() {
        let list = this.getView();

        console.log("Hello from init");
        client.query('Select Name,Email,proPic__c from Contact', function(response) {
            console.log("Hello from function");
            console.log(response);
            list.setData(response.records);
        });
    }

    // control: {
    //     '#search': {
    //         keyup: 'filter'
    //     }
    // },

    // filter: function(field, e) {
    //     let list = this.getView().down('#employees');
    //     let searchString = field.getValue();
    //     list.getStore().filter((record) => record.data.Name.indexOf(searchString) !== -1);
    // }

});