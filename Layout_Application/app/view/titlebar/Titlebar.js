/**
 * @component Title Bar
 * @description
 * This has the information about the Title bar and its content
 */

Ext.define('Layout.view.titlebar.Titlebar', {
    extend: 'Ext.TitleBar',
    xtype: 'titlebar',

    requires: [
        'Layout.view.titlebar.TitlebarController',
        'Layout.view.titlebar.TitlebarModel'
    ],

    controller: 'titlebar-titlebar',
    viewModel: {
        type: 'titlebar-titlebar'
    },

    xtype: 'titlebar',
    docked: 'top',
    title: 'Employee Application',
    titleAlign: 'center'
});