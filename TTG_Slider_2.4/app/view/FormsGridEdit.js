/*
 * File: app/view/FormsGridEdit.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TouchTreeGrid.view.FormsGridEdit', {
    extend: 'Ext.Container',
    alias: 'widget.formsGridEdit',

    requires: [
        'Ext.Container'
    ],

    config: {
        itemId: 'formsGridEdit',
        layout: 'fit',
        items: [
            {
                xtype: 'touchtreegrid',
                store: 'FormsTask',
                columns: [
                    {
                        header: 'Task',
                        dataIndex: 'text',
                        width: '100%',
                        style: ' text-align: left;',
                        categStyle: 'font-weight: bold; text-align: left; color: blue;',
                        headerStyle: 'text-align: left; color: #ccc;'
                    }
                ],
                variableHeights: true,
                listItemId: 'formexample1list',
                includeFooter: false,
                contentItemTplOverride: '{[this.renderer_myForm("TouchTreeGrid.view.MyFormPanel", "320px", values)]}',
                includeHeader: false,
                applyDefaultCollapseLevel: false,
                defaultCollapseLevel: 1,
                helpHtml: './resources/html/FormsGridEdit.html',
                singleExpand: true,
                infinite: false,
                cls: [
                    'x-touchtreegrid-list',
                    'touchtreegrid-myForm'
                ],
                itemId: 'formexample1'
            }
        ]
    }

});