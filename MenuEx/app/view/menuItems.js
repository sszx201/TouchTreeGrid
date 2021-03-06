/*
 * File: app/view/menuItems.js
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

Ext.define('MyApp.view.menuItems', {
    extend: 'Ext.Container',
    alias: 'widget.menuItems',

    config: {
        itemId: 'menuItems',
        minWidth: '256px',
        style: 'border-right: thin solid #999; background-color: #323232; font-size: 1em;',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'container',
                cls: 'menuopt_header',
                height: '35px',
                html: 'TouchTreeGrid Demo',
                itemId: 'menuopt_header',
                maxHeight: '35px',
                minHeight: '35px',
                padding: '8px 0 0 0',
                style: 'color: white; text-align: center; font-size: 1em;',
                ui: 'plain'
            },
            {
                xtype: 'container',
                height: '35em',
                itemId: 'menuoptitems',
                minHeight: '',
                style: 'background-color: #323232;',
                scrollable: {
                    //http://www.sencha.com/forum/showthread.php?175065
                    direction: 'vertical',
                    directionLock: true,
                    momentumEasing: {
                        momentum: {
                            acceleration: 30,
                            friction: 0.5
                        },
                        bounce: {
                            acceleration: 0.0001,
                            springTension: 0.9999
                        },
                        minVelocity: 5
                    },
                    outOfBoundRestrictFactor: 0
                },
                items: [
                    {
                        xtype: 'touchtreegrid',
                        store: 'menuOptsStore',
                        listScrollable: false,
                        disableSelection: false,
                        onItemDisclosure: true,
                        columns: [
                            {
                                dataIndex: 'Image',
                                width: '15%',
                                style: 'text-align: left;'
                            },
                            {
                                dataIndex: 'Text',
                                width: '85%',
                                style: 'text-align: left;'
                            }
                        ],
                        disclosureProperty: 'leaf',
                        listItemId: 'menuoptlist',
                        includeFooter: false,
                        categIndentPct: '0',
                        categDepthColors: true,
                        categDepthColorsArr: [
                            '#323232',
                            'white',
                            'white'
                        ],
                        includeHeader: false,
                        applyDefaultCollapseLevel: true,
                        defaultCollapseLevel: 99,
                        singleExpand: true,
                        mode: 'MULTI',
                        arrowPctWidth: '0',
                        disableExpandCollapse: true,
                        cls: [
                            'x-touchtreegrid-list',
                            'x-touchtreegrid-list-menuopt'
                        ],
                        itemId: 'menuopt'
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();

        var scrnHt = (window.innerHeight > 0) ? window.innerHeight : screen.height; 
        var gridHt = scrnHt  - 35;  // Subtract height of menu header
        var gridHtPx = gridHt.toString()+'px';

        var menuoptitems = this.down('#menuoptitems');
        menuoptitems.setMinHeight(gridHtPx);
        menuoptitems.setHeight(gridHtPx);
        menuoptitems.setMaxHeight(gridHtPx);

        var scrollerHt = (22*47).toString()+'px';  // (5 categories + 16 menu options + 1 buffer) times 47px each
        var menuopt = this.down('#menuopt');
        menuopt.setMinHeight(scrollerHt);
        menuopt.setHeight(scrollerHt);
        menuopt.setMaxHeight(scrollerHt);
    }

});