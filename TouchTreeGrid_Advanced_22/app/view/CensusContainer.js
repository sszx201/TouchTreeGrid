/*
 * File: app/view/CensusContainer.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TouchTreeGrid.view.CensusContainer', {
    extend: 'Ext.Container',
    alias: 'widget.censusContainer',

    requires: [
        'TouchTreeGrid.view.TouchTreeGrid'
    ],

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'tabpanel',
                itemId: 'censustabpanel',
                items: [
                    {
                        xtype: 'container',
                        title: 'Census',
                        itemId: 'censusmainecontainer',
                        layout: {
                            type: 'card'
                        },
                        items: [
                            {
                                xtype: 'touchtreegrid',
                                categIndentPct: '2',
                                store: 'censusmaine2000store',
                                onItemDisclosure: true,
                                listItemId: 'censusmainelist',
                                categDepthColors: true,
                                renderers: {
                                    renderer_displayIn1000s: function(value)
                                 {return this.formatNumbers(Math.round(Number(value)/1000), 0);}
                                },
                                defaultCollapseLevel: 2,
                                landscapeIcon: './resources/images/Recycle.png',
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
                        title: 'FilterEx',
                        cls: 'census-filter-cont',
                        itemId: 'censusfiltercont',
                        layout: {
                            type: 'card'
                        },
                        items: [
                            {
                                xtype: 'container',
                                itemId: 'censusfiltersubcont',
                                layout: {
                                    type: 'fit'
                                },
                                items: [
                                    {
                                        xtype: 'touchtreegrid',
                                        categIndentPct: '2',
                                        store: 'censusFilterStore',
                                        onItemDisclosure: true,
                                        listItemId: 'censusfilterlist',
                                        includeFooter: false,
                                        categDepthColors: true,
                                        renderers: {
                                            renderer_displayIn1000s: function(value)
                                         {return this.formatNumbers(Math.round(Number(value)/1000), 0);}
                                        },
                                        defaultCollapseLevel: 2,
                                        landscapeIcon: './resources/images/Recycle.png',
                                        helpHtml: './resources/html/CensusFilterExample.html',
                                        cls: [
                                            'x-touchtreegrid-list',
                                            'x-touchtreegrid-list-censusmaine'
                                        ],
                                        itemId: 'censusfilter'
                                    },
                                    {
                                        xtype: 'toolbar',
                                        docked: 'bottom',
                                        style: 'background-color: #8dc2e9;',
                                        ui: 'light',
                                        items: [
                                            {
                                                xtype: 'segmentedbutton',
                                                docked: 'left',
                                                margin: '.3em 0 0 0',
                                                items: [
                                                    {
                                                        xtype: 'button',
                                                        itemId: 'censusfilterexpandbtn',
                                                        text: 'Expand'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        itemId: 'censusfiltercollapsebtn',
                                                        text: 'Collapse'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'selectfield',
                                                docked: 'right',
                                                height: '1.7em',
                                                itemId: 'censusfilterselect',
                                                margin: '.7em 0 0 0',
                                                maxWidth: '12em',
                                                minWidth: '10em',
                                                style: 'font-size: .8em; ',
                                                width: '10em',
                                                options: [
                                                    {
                                                        text: 'All',
                                                        value: '0'
                                                    },
                                                    {
                                                        text: 'Males > Females',
                                                        value: '1'
                                                    },
                                                    {
                                                        text: 'Females > Males',
                                                        value: '2'
                                                    },
                                                    {
                                                        text: 'Population > 10k',
                                                        value: '3'
                                                    }
                                                ],
                                                usePicker: false
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                tabBar: {
                    cls: 'projectTabBar',
                    docked: 'top',
                    style: 'background-image: -webkit-linear-gradient(top, rgb(86, 167, 223), rgb(43, 145, 215) 3%, rgb(33, 117, 175));',
                    ui: 'light'
                }
            }
        ]
    },

    initialize: function() {
        this.callParent();

        var device = ((Ext.os.is.Phone) ? 'phone' : 'tablet');

        censusmaine = this.down('#censusmaine');
        censusfilter = this.down('#censusfilter');

        if (device === 'phone') {
            censusmaine.setCls(['x-touchtreegrid-list', 'x-touchtreegrid-list-censusmaine-phone']);
            censusfilter.setCls(['x-touchtreegrid-list', 'x-touchtreegrid-list-censusmaine-phone']);
        }
    }

});