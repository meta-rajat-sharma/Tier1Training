/**
 * @component left panel controller
 * @description
 * This contains all the defination of the function for the search and the sorting method
 */

Ext.define('Layout.view.leftpanel.LeftPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.leftpanel-leftpanel',

    control: {
        '#conSearch': {
            change: 'filter'
        }
    },

    /**
     * 
     * @param {*} field : stores the data related to search bar
     * @param {*} newValue : contains the new value in search bar
     * @param {*} oldValue : contains the old value in search bar
     * @param {*} e : Event
     * @description
     * This function search the list based on new Value by converting to Regular expression
     */
    filter: function(field, newValue, oldValue, e) {
        let regularExp = new RegExp(newValue, 'gi');
        let list = this.getView().down('#employeeList');
        var myStore = list.getStore();
        myStore.filter('Name', regularExp);
    },

    /**
     * 
     * @param {*} field : Stores the data related to sorting
     * @param {*} newValue : contains the new data in select type
     * @param {*} oldValue : contains the old data in select type
     * @param {*} e : Event
     * @description
     * This function sort the list based on the type selected
     */
    sortValue: function(field, newValue, oldValue, e) {
        let forSort = this.getView().down('#employeeList');
        var sortStore = forSort.getStore();
        if (newValue.get('value') === 'Name') {
            sortStore.sort('Name', 'AESC');
        } else {
            sortStore.sort('Email', 'AESC');
        }
    }
});