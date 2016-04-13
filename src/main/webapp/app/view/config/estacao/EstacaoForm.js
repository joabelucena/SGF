Ext.define('Sam.view.config.estacao.EstacaoForm', {
	extend: 'Ext.Panel',
	requires:['Sam.view.components.FormToolbar'],
	
	alias:  'widget.estacaoform',
	
	itemId: 'estacaoform',
	
	closable: true,
	
	layout:{
		type: 'fit',
	},
	
	items : [ {
		xtype : 'form',

		defaultType : 'textfield',

		fieldDefaults : {
			labelWidth : 100
		},
		
		defaults:{
			allowBlank : false
		},
		
		layout : {
			type : 'vbox'
		},

		bodyPadding : 10,
		border : false,
		items : [{
			fieldLabel : 'Código',
			itemId: 'id',
			name: 'id',
			editable: false,	//ID field must always be editable: false. Check Utils.js
			allowBlank: false,
			width: 250,
			inputAttrTpl: " data-qtip='Código da Estação' "
		},{
			fieldLabel : 'Sigla',
			itemId: 'sigla',
			name: 'sigla',
			allowBlank : false,
			width: 200,
			inputAttrTpl: " data-qtip='Sigla da Estação' "
		},{
			fieldLabel : 'Nome',
			itemId: 'nome',
			name: 'nome',
			allowBlank : false,
			width: 650,
			inputAttrTpl: " data-qtip='Nome da Estação' "
		},{
			fieldLabel : 'Código SCAP',
			itemId: 'scapID',
			name: 'scapID',
			allowBlank : false,
			width: 250,
			inputAttrTpl: " data-qtip='Código de referencia no SCAP (Sistema de Controle e Arrecadação de Passageiros)' "
		},{
			xtype: 'numberfield',
			fieldLabel : 'Longitude',
			itemId: 'longitude',
			name: 'longitude',
			allowBlank : false,
			width: 650,
			inputAttrTpl: " data-qtip='Coordenada de Longitude' "
		},{
			xtype: 'numberfield',
			fieldLabel : 'Latitude',
			itemId: 'latitude',
			name: 'latitude',
			allowBlank : false,
			width: 650,
			inputAttrTpl: " data-qtip='Coordenada de Latitude' "
		},{
			xtype: 'numberfield',
			fieldLabel : 'Posição X',
			itemId: 'posX',
			name: 'posX',
			allowBlank : false,
			width: 100,
			inputAttrTpl: " data-qtip='Coordenada de Posição em Pixels' "
		},{
			xtype: 'numberfield',
			fieldLabel : 'Posição X',
			itemId: 'posX',
			name: 'posX',
			allowBlank : false,
			width: 300,
			inputAttrTpl: " data-qtip='Coordenada de Posição em Pixels' "
		},{
			xtype: 'numberfield',
			fieldLabel : 'Posição Y',
			itemId: 'posY',
			name: 'posY',
			allowBlank : false,
			width: 300,
			inputAttrTpl: " data-qtip='Coordenada de Posição em Pixels' "
		},{
			fieldLabel : 'Geozone',
			itemId: 'geozoneID',
			name: 'geozoneID',
			allowBlank : false,
			width: 250,
			inputAttrTpl: " data-qtip='Código da zona geografica em que a estação está localizada.' "
		}],
		
		scrollable: true,
		
		dockedItems: [{
			xtype: 'formtoolbar'
		}]
	} ]
	
});