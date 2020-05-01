/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('Layout.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'Layout.view.titlebar.Titlebar',
        'Layout.view.container.Container',
        'Layout.view.main.MainController',
        'Layout.view.main.MainModel',
        'Layout.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    items: [{
        xtype: 'titlebar'
    }, {
        xtype: 'contain',
        height: '100%',
        flex: 1,
        margin: '8px'
    }]
});