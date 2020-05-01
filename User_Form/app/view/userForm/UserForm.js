Ext.define('Day1.Form.view.userForm.UserForm', {
    extend: 'Ext.form.Panel',
    xtype: 'userFormOutput',

    requires: [
        'Day1.Form.view.userForm.UserFormController',
        'Day1.Form.view.userForm.UserFormModel'
    ],

    controller: 'userform-userform',
    viewModel: {
        type: 'userform-userform'
    },

    items: [{
        xtype: 'formpanel',
        title: 'User Form',
        iconCls: 'x-fa fa-file-text-o',
        // Giving padding to the whole body
        bodyPadding: 70,
        // for making the layout to set everything in center
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center',
        },
        // To make labelClass default for everyone
        defaults: {
            labelCls: 'labelClass'
        },
        // For making input panels
        items: [{
                xtype: 'textfield',
                labelAlign: "left",
                placeHolder: 'First Name',
                labelWidth: 200,
                label: 'First Name : ',
                name: 'firstName'
            },
            {
                xtype: 'textfield',
                labelAlign: "left",
                placeHolder: 'Email ID',
                labelWidth: 200,
                label: 'Email : ',
                name: 'lastName'
            },
            {
                // for using number field for taking contact number
                xtype: 'numberfield',
                // For setting the label in the Left
                labelAlign: "left",
                placeHolder: 'Contact Number',
                // For setting visible the label by taking it to left
                labelWidth: 200,
                label: 'Contact Number : ',
                name: 'contact'
            }, {
                xtype: "textareafield",
                labelAlign: "left",
                placeHolder: 'Address',
                labelWidth: 200,
                label: "Address : ",
                name: "Address"
            }, {
                xtype: "button",
                text: "submit",
                textAlign: 'center',
                maxWidth: '300px',
                padding: '20px',
                // For setting size of the submit
                scale: 'medium',
                name: "submit",
                // For making corners round
                ui: 'round'
            }
        ]
    }]
});