/*
 * File: app/view/MyContainer.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyContainer', {
    extend: 'Ext.Container',

    config: {
        layout: {
            align: 'center',
            type: 'vbox'
        },
        items: [
            {
                xtype: 'button',
                itemId: 'leftBtn',
                margin: '.5em .5em 0 .5em',
                width: '17em',
                text: 'Toggle left menu (slide)'
            },
            {
                xtype: 'button',
                itemId: 'rightBtn',
                margin: '.5em .5em 0 .5em',
                width: '17em',
                text: 'Toggle right menu (reveal)'
            },
            {
                xtype: 'button',
                itemId: 'topBtn',
                margin: '.5em .5em 0 .5em',
                width: '17em',
                text: 'Toggle top menu (cover)'
            },
            {
                xtype: 'button',
                itemId: 'bottomBtn',
                margin: '.5em .5em 0 .5em',
                width: '17em',
                text: 'Toggle bottom menu (cover)'
            },
            {
                xtype: 'button',
                itemId: 'changeBottomBtn',
                margin: '.5em .5em 0 .5em',
                width: '17em',
                text: 'Change bottom menu (cover)'
            }
        ]
    }

});