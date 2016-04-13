Ext.define('Sam.view.config.trecho.TrechoForm', {
	extend: 'Ext.Panel',
	requires:['Sam.view.components.FormToolbar'],
	
	alias:  'widget.trechoform',
	
	itemId: 'trechoform',
	
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
			inputAttrTpl: " data-qtip='Código do Trecho' "
		},{
			fieldLabel : 'Descrição',
			itemId: 'desc',
			name: 'desc',
			allowBlank : false,
			width: 650,
			inputAttrTpl: " data-qtip='Descrição do Trecho' "
		},{
			xtype : 'groupfield',
			defaultType : 'textfield',
			title : 'Setor',
			itemId: 'setorInfo',
			width: '60%',
			
			items:[{
				xtype: 'textfield',
				fieldLabel : 'Código',
				itemId: 'setorID',
				name: 'setorID',
				editable: false,
				width: '30%',
				allowBlank : false,
				inputAttrTpl: " data-qtip='Código do Sistema' ",
				triggers: {f3: {handler: function() {
					
					Ext.create('Sam.view.components.PopUp',{
						title: 'Selecionar Setor',
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
				        			groupField = Ext.ComponentQuery.query('#setorInfo',activeTab)[0];
				        		
					        	if(record){
					        		
					        		groupField.loadRecord(record);
					        		
					        		window.close();
					        		
					        	}
							}
				        
						} ],
					
					items:	[Ext.create('Sam.view.config.setor.SetorGrid',{dockedItems:[]})],
					
				}).show()}}}
			
				}, {
					fieldLabel : 'Descrição',
					itemId: 'setorDesc',
					name: 'setorDesc',
					readOnly : true,
					width: '50%',
					inputAttrTpl: " data-qtip='Descrição do Setor' ",
				}]
			},{
			xtype: 'fieldset',
			title: 'Rota',
			width: '60%',
			items:[{
				xtype : 'groupfield',
				defaultType : 'textfield',
				title : 'Origem',
				itemId: 'origemInfo',
				width: '60%',
				
				items:[{
					xtype: 'textfield',
					fieldLabel : 'Código',
					itemId: 'origemID',
					name: 'origemID',
					editable: false,
					width: '30%',
					allowBlank : false,
					inputAttrTpl: " data-qtip='Código da Estacao de origem' ",
					triggers: {f3: {handler: function() {
						
						Ext.create('Sam.view.components.PopUp',{
							title: 'Selecionar Estacao',
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
					        			groupField = Ext.ComponentQuery.query('#origemInfo',activeTab)[0];
					        		
						        	if(record){
						        		
						        		groupField.loadRecord(record);
						        		
						        		window.close();
						        		
						        	}
								}
					        
							} ],
						
						items:	[Ext.create('Sam.view.config.estacao.EstacaoGrid',{dockedItems:[]})],
						
					}).show()}}}
				
					}, {
						fieldLabel : 'Descrição',
						itemId: 'origemDesc',
						name: 'origemDesc',
						readOnly : true,
						width: '50%',
						inputAttrTpl: " data-qtip='Descrição da Estacao de origem' ",
					}]
				},{

					xtype : 'groupfield',
					defaultType : 'textfield',
					title : 'Destino',
					itemId: 'destinoInfo',
					width: '60%',
					
					items:[{
						xtype: 'textfield',
						fieldLabel : 'Código',
						itemId: 'destinoID',
						name: 'destinoID',
						editable: false,
						width: '30%',
						allowBlank : false,
						inputAttrTpl: " data-qtip='Código da Estacao destino' ",
						triggers: {f3: {handler: function() {
							
							Ext.create('Sam.view.components.PopUp',{
								title: 'Selecionar Estacao',
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
						        			groupField = Ext.ComponentQuery.query('#destinoInfo',activeTab)[0];
						        		
							        	if(record){
							        		
							        		groupField.loadRecord(record);
							        		
							        		window.close();
							        		
							        	}
									}
						        
								} ],
							
							items:	[Ext.create('Sam.view.config.estacao.EstacaoGrid',{dockedItems:[]})],
							
						}).show()}}}
					
						}, {
							fieldLabel : 'Descrição',
							itemId: 'destinoDesc',
							name: 'destinoDesc',
							readOnly : true,
							width: '50%',
							inputAttrTpl: " data-qtip='Descrição da Estacao destino' ",
						}]
					
				}]
			
		}],
		
		scrollable: true,
		
		dockedItems: [{
			xtype: 'formtoolbar'
		}]
	} ]
	
});