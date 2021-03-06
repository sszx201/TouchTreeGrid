/*
 * File: app/view/OverrideExampleCont.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('TouchTreeGrid.view.OverrideExampleCont', {
    extend: 'Ext.Container',
    alias: 'widget.overrideExampleCont',

    requires: [
        'Ext.Container'
    ],

    config: {
        itemId: 'overrideExampleCont',
        layout: 'fit',
        items: [
            {
                xtype: 'touchtreegrid',
                store: 'overrideStore',
                listItemId: 'overrideexamplelist',
                includeFooter: false,
                categItemTplOverride: '<div style="display : inline-block; white-space : nowrap; width : 100%;font-size: 1.5em;">\r<tpl if="this.isExpanded(values)">\r<span class="x-button x-button-small ">\r   <span class="x-button-icon arrow_down x-icon-mask" \r      style="width: .75em; height: .75em; margin-right:0.4em;">\r   </span>\r<span style="color:blue; padding-left: 1.5em; padding-top: .2em; padding-bottom: .2em;">{text}</span>\r</span>\r<tpl else>\r<span class="x-button x-button-small">\r   <span class="x-button-icon arrow_right x-icon-mask" \r       style="width: .75em; height: .75em; margin-right:0.4em;">\r   </span>\r   <span style="width: 100%; color:blue; padding-left: 1.5em; padding-top: .2em; padding-bottom: .2em;">{text}</span>\r</span>\r</tpl>\r</div>',
                contentItemTplOverride: '<div style="background-color: white; padding-left: 2em; font-size: 1.2em;">{text}</div>',
                includeHeader: false,
                defaultCollapseLevel: 1,
                helpHtml: './resources/html/OverrideExample.html',
                cls: [
                    'x-touchtreegrid-list',
                    'x-touchtreegrid-list-override'
                ],
                itemId: 'overrideexample'
            }
        ]
    }

});