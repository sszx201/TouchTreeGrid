/*
 * File: app/view/Main.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TouchTreeGrid.view.Main', {
    extend: 'Ext.Container',
    alias: 'widget.main',

    requires: [
        'TouchTreeGrid.view.TouchTreeGrid',
        'TouchTreeGrid.view.ProjectContainer'
    ],

    config: {
        itemId: 'main',
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'titlebar',
                listeners: {
                    tap: {
                        fn: function() {
                              this.fireEvent('gridhelp', this.up('container'));
                          },
                        element: 'element'
                    }
                },
                docked: 'top',
                height: '2.2em',
                itemId: 'maintitlebar',
                title: 'TouchTreeGrid Demo',
                items: [
                    {
                        xtype: 'image',
                        docked: 'left',
                        height: '1.5em',
                        itemId: 'gridhelp',
                        margin: '.4em 0 0 .2em',
                        width: '1.5em',
                        src: './resources/images/question.png'
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                flex: 1,
                itemId: 'maintabpanel',
                items: [
                    {
                        xtype: 'container',
                        title: 'TaskList',
                        iconCls: 'user_list',
                        layout: {
                            type: 'fit'
                        },
                        items: [
                            {
                                xtype: 'touchtreegrid',
                                columns: [
                                    {
                                        header: 'Task',
                                        dataIndex: 'text',
                                        width: '35%',
                                        style: ' text-align: left;',
                                        categStyle: 'font-weight: bold; font-size: 1.5em; padding-top: .2em; text-align: left; color: blue;',
                                        headerStyle: 'text-align: left; color: #ccc;'
                                    }
                                ],
                                listItemId: 'firstexamplelist',
                                includeFooterLevels: false,
                                helpHtml: './resources/html/TaskExample.html',
                                store: 'TaskAccordionStore',
                                includeHeader: false,
                                defaultCollapseLevel: 1,
                                styleCategRow: 'height: 2.6em;',
                                singleExpand: true,
                                cls: [
                                    'x-touchtreegrid-list',
                                    'x-touchtreegrid-list-accordion'
                                ],
                                itemId: 'firstexample'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Project',
                        iconCls: 'doc_list',
                        itemId: 'projecttab',
                        layout: {
                            type: 'fit'
                        },
                        items: [
                            {
                                xtype: 'projectContainer'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'CENSUS',
                        iconCls: 'team',
                        itemId: 'censusmainecontainer',
                        layout: {
                            type: 'card'
                        },
                        items: [
                            {
                                xtype: 'touchtreegrid',
                                categIndentPct: 2,
                                store: 'censusmaine2000store',
                                onItemDisclosure: true,
                                listItemId: 'censusmainelist',
                                categDepthColors: true,
                                renderers: {
                                    renderer_displayIn1000s: function(value)
                                 {return this.formatNumbers(Math.round(Number(value)/1000), 0);}
                                },
                                defaultCollapseLevel: 2,
                                helpHtml: './resources/html/CensusExample.html',
                                cls: [
                                    'x-touchtreegrid-list',
                                    'x-touchtreegrid-list-censusmaine'
                                ],
                                itemId: 'censusmaine'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'DOW Hist',
                        iconCls: 'chart2',
                        itemId: 'dow2012container',
                        layout: {
                            type: 'fit'
                        },
                        items: [
                            {
                                xtype: 'touchtreegrid',
                                store: 'dow2012store',
                                columns: [
                                    {
                                        header: 'CloseDate',
                                        dataIndex: 'CloseDate',
                                        width: '25%',
                                        style: 'text-align: left; font-weight: bold; color: #008abc;',
                                        headerStyle: 'text-align: left; color: #ccc;',
                                        renderer: 'Ext.Date.format(values.CloseDate, "n/j/Y")',
                                        sortable: true
                                    },
                                    {
                                        header: 'Close',
                                        dataIndex: 'Close',
                                        width: '20%',
                                        style: 'text-align: right;font-weight: bold;',
                                        headerStyle: 'text-align: right; padding-right: .5em !important; color: #ccc;',
                                        renderer: 'this.formatNumbers(values.Close, 0)',
                                        sortable: true
                                    },
                                    {
                                        header: 'Chg',
                                        dataIndex: 'Chg',
                                        width: '20%',
                                        style: 'text-align: right;font-weight: bold;',
                                        headerStyle: 'text-align: right; padding-right: .5em !important; color: #ccc;',
                                        renderer: 'this.renderer_formatWithColor(values.Chg, 0)',
                                        sortable: true
                                    },
                                    {
                                        header: 'Chg%',
                                        dataIndex: 'ChgPct',
                                        width: '20%',
                                        style: 'text-align: right;font-weight: bold;',
                                        headerStyle: 'text-align: right; padding-right: .5em !important; color: #ccc;',
                                        renderer: 'this.renderer_formatWithColor(values.ChgPct, 2, "", "%")',
                                        sortable: true
                                    }
                                ],
                                header: {
                                    xtype: 'toolbar',
                                    docked: 'top',
                                    cls: 'touchtreegrid-header',
                                    maxHeight: '2.6em',
                                    minHeight: '2.6em',
                                    padding: '.6em 0 0 0 !important'
                                },
                                listItemId: 'dow2012list',
                                renderers: {
                                    renderer_formatWithColor: function (value, decPlaces, prefix, suffix, thouSeparator, decSeparator)
                                {var clr = (value >= 0) ? 'green' : 'red';
                                return '<span style="color:' + clr + ';">' + this.formatNumbers(value, decPlaces, prefix, suffix, thouSeparator, decSeparator) +
                                    '</span>';}
                                },
                                helpHtml: './resources/html/DOW2012Example.html',
                                simpleList: true,
                                columnSorting: true,
                                cls: [
                                    'x-touchtreegrid-list',
                                    'x-touchtreegrid-list-dow2012'
                                ],
                                itemId: 'dow2012'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Override',
                        iconCls: 'compose',
                        layout: {
                            type: 'fit'
                        },
                        items: [
                            {
                                xtype: 'touchtreegrid',
                                listItemId: 'overrideexamplelist',
                                includeFooter: false,
                                includeFooterLevels: false,
                                store: 'TaskStore',
                                categItemTplOverride: '<div>\r\n<tpl if="this.isExpanded(values)">\r\n<span class="x-button x-button-small ">\r\n   <span class="x-button-icon arrow_down x-icon-mask" \r\n      style="width: .75em; height: .75em; margin-right:0.4em;">\r\n   </span>\r\n   <span style="color:blue;">{text}</span>\r\n</span>\r\n<tpl else>\r\n<span class="x-button x-button-small">\r\n   <span class="x-button-icon arrow_right x-icon-mask" \r\n       style="width: .75em; height: .75em; margin-right:0.4em;">\r\n   </span>\r\n   <span style="color:blue;">{text}</span>\r\n</span>\r\n</tpl>\r\n</div>',
                                contentItemTplOverride: '<div style="background-color:#fff; border-bottom: 1px solid #dedede;">{text}</div>',
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
                ],
                tabBar: {
                    docked: 'bottom',
                    itemId: 'maintabbar',
                    scrollable: 'horizontal'
                }
            }
        ]
    }

});