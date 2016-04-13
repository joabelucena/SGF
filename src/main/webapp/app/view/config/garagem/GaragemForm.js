Ext.define('Sam.view.config.garagem.GaragemForm', {
	extend: 'Ext.Panel',
	requires:['Sam.view.components.FormToolbar'],
	
	alias:  'widget.garagemform',
	
	itemId: 'garagemform',
	
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
			inputAttrTpl: " data-qtip='Código do Sistema' "
		},{
			fieldLabel : 'Descrição',
			itemId: 'desc',
			name: 'desc',
			allowBlank : false,
			width: 650,
			inputAttrTpl: " data-qtip='Descrição do Sistema' "
		},{

			xtype : 'groupfield',
			defaultType : 'textfield',
			title : 'Sistema',
			itemId: 'sistemaInfo',
			width: '60%',
			
			items:[{
				xtype: 'textfield',
				fieldLabel : 'Código',
				itemId: 'sistemaID',
				name: 'sistemaID',
				editable: false,
				width: '30%',
				allowBlank : false,
				inputAttrTpl: " data-qtip='Código do Sistema' ",
				triggers: {f3: {handler: function() {
					
					Ext.create('Sam.view.components.PopUp',{
						title: 'Selecionar Sistema',
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
				        			groupField = Ext.ComponentQuery.query('#sistemaInfo',activeTab)[0];
				        		
					        	if(record){
					        		
					        		groupField.loadRecord(record);
					        		
					        		window.close();
					        		
					        	}
							}
				        
						} ],
					
					items:	[Ext.create('Sam.view.config.sistema.SistemaGrid',{dockedItems:[]})],
					
				}).show()}}}
			
				}, {
					fieldLabel : 'Descrição',
					itemId: 'sistemaDesc',
					name: 'sistemaDesc',
					readOnly : true,
					width: '50%',
					inputAttrTpl: " data-qtip='Descrição do Sistema' ",
				}]
			
		}],
		
		scrollable: true,
		
		dockedItems: [{
			xtype: 'formtoolbar'
		}]
	} ]
	
});