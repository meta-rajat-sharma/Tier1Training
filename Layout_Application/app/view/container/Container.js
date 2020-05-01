/**
 * @component Container
 * This component is defined to contain left and right panel with some configuration of them
 */
Ext.define('Layout.view.container.Container', {
    extend: 'Ext.Container',
    xtype: 'contain',

    requires: [
        'Layout.view.leftpanel.LeftPanel',
        'Layout.view.rightpanel.RightPanel',
        'Layout.view.container.ContainerController',
        'Layout.view.container.ContainerModel'
    ],

    controller: 'container-container',
    viewModel: {
        type: 'container-container'
    },

    layout: 'hbox',
    items: [{
        xtype: 'leftpanel',
        width: '350px',
        margin: '4px'
    }, {
        xtype: 'rightpanel',
        margin: '4px',
        flex: 2
    }]
});