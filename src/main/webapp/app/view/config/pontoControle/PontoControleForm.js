Ext.define('Sam.view.config.pontoControle.PontoControleForm', {
	extend: 'Ext.Panel',
	requires:['Sam.view.components.FormToolbar'],
	
	alias:  'widget.pontoform',
	
	itemId: 'pontoform',
	
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
			width: 200,
			inputAttrTpl: " data-qtip='Código do Ponto de Controle' "
		},{
			fieldLabel : 'Descrição',
			itemId: 'desc',
			name: 'desc',
			allowBlank : false,
			width: 650,
			inputAttrTpl: " data-qtip='Descrição do Ponto de Controle' "
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

			xtype : 'groupfield',
			defaultType : 'textfield',
			title : 'Linha',
			itemId: 'linhaInfo',
			width: '60%',
			
			items:[{
				xtype: 'textfield',
				fieldLabel : 'Código',
				itemId: 'linhaID',
				name: 'linhaID',
				editable: false,
				width: '30%',
				allowBlank : false,
				inputAttrTpl: " data-qtip='Código da Linha' ",
				triggers: {f3: {handler: function() {
					
					Ext.create('Sam.view.components.PopUp',{
						title: 'Selecionar Linha',
						buttons : [ {
							text : 'Confirma',
							itemId: 'submit',
							cls:'x-btn-default-small',
							iconCls: 'tick-button',
							handler: function(button) {
				        	
					        	//Aba Objecto Pai
				        		var activeTab = Ext.getCmp('viewportpanel').getActiveTab(),
				        			window = button.up('window'),
				        			record = button.up('window').down('grid').getSelection()[0],
				        			form = Ext.ComponentQuery.query('form',activeTab)[0].getForm(),
				        			groupField = Ext.ComponentQuery.query('#linhaInfo',activeTab)[0];
				        		
					        	if(record){
					        		
					        		groupField.loadRecord(record);
					        		
					        		window.close();
					        		
					        	}
							}
				        
						} ],
					
					items:	[Ext.create('Sam.view.config.linha.LinhaGrid',{dockedItems:[]})],
					
				}).show()}}}
			
				}, {
					fieldLabel : 'Descrição',
					itemId: 'linhaDesc',
					name: 'linhaDesc',
					readOnly : true,
					width: '50%',
					inputAttrTpl: " data-qtip='Descrição da Linha' ",
				}]
			
		}],
		
		scrollable: true,
		
		dockedItems: [{
			xtype: 'formtoolbar'
		}]
	} ]
	
});