Ext.define('Sam.controller.ConfigurationController', {
	extend: 'Ext.app.Controller',
	
	views: ['config.sistema.SistemaGrid'
	        ,'config.garagem.GaragemGrid'
	        ,'config.pontoControle.PontoControleGrid'
	        ,'config.linha.LinhaGrid'
	        ,'config.setor.SetorGrid'
	        ,'config.estacao.EstacaoGrid'
	        ,'config.device.DeviceGrid'
	        ,'config.trecho.TrechoGrid'],
   
	init: function() {
		
		this.control({
			/* 
			 * Buttons Listeners: Alarm
			 */
			'#alarmform_alarm #submit' :{
				click: this.AlarmFormAlarmSubmit,
			},
			
			'#alarmform_model #submit' :{
				click: this.AlarmFormModelSubmit,
			},
			
			'#alarmform_type #submit' :{
				click: this.AlarmFormTypeSubmit,
			},
			
			'#alarmform_group #submit' :{
				click: this.AlarmFormGroupSubmit,
			},
			
			'#alarmform_severity #submit' :{
				click: this.AlarmFormSeveritySubmit,
			},
			
			'#alarmform toolbar #btnSubmit' :{
				create: this.onAlarmBtnSubmitAdd,
				read:   function(){Ext.getCmp('viewportpanel').getActiveTab().close()},
				update: this.onAlarmBtnSubmitEdit,
				remove: this.onAlarmBtnSubmitDelete,
				
			},
			
			'#alarmgrid toolbar #btnShow' :{
				click: this.onAlarmBtnShowClick
			},
			
			'#alarmgrid toolbar #btnEdit' :{
				click: this.onAlarmBtnEditClick
			},
			
			'#alarmgrid toolbar #btnAdd' :{
				click: this.onAlarmBtnAddClick
			},
			
			'#alarmgrid toolbar #btnDelete' :{
				click: this.onAlarmBtnDeleteClick
			}
			
		});
	},
	/*********** Begin Alarm Controlling ***********/
	AlarmFormAlarmSubmit: function(){
		
		var row = this.getLookup().down('grid').getSelection()[0];
		
		var activeTab = Ext.getCmp('viewportpanel').getActiveTab();
		
		if(row){
			
			Ext.ComponentQuery.query('#alarm_id',activeTab)[0].setValue(row.get('id'));
			Ext.ComponentQuery.query('#alarm_desc',activeTab)[0].setValue(row.get('desc'));
			
			this.getLookup().close();
		}
	},

	AlarmFormModelSubmit: function(){
		
	var row = this.getLookup().down('grid').getSelection()[0];
		
		var activeTab = Ext.getCmp('viewportpanel').getActiveTab();
		
		if(row){
			
			Ext.ComponentQuery.query('#model_id',activeTab)[0].setValue(row.get('id'));
			Ext.ComponentQuery.query('#model_desc',activeTab)[0].setValue(row.get('desc'));
			
			this.getLookup().close();
		}
		
	},
	
	AlarmFormGroupSubmit: function(){
		
		var row = this.getLookup().down('grid').getSelection()[0];
			
			var activeTab = Ext.getCmp('viewportpanel').getActiveTab();
			
			if(row){
				
				Ext.ComponentQuery.query('#group_id',activeTab)[0].setValue(row.get('id'));
				Ext.ComponentQuery.query('#group_desc',activeTab)[0].setValue(row.get('desc'));
				
				this.getLookup().close();
			}
			
		},
			
		
	AlarmFormTypeSubmit: function(){
	var row = this.getLookup().down('grid').getSelection()[0];
		
		var activeTab = Ext.getCmp('viewportpanel').getActiveTab();
		
		if(row){
			
			Ext.ComponentQuery.query('#type_id',activeTab)[0].setValue(row.get('id'));
			Ext.ComponentQuery.query('#type_desc',activeTab)[0].setValue(row.get('desc'));
			
			this.getLookup().close();
		}
	},

	AlarmFormSeveritySubmit: function(){
	
		var row = this.getLookup().down('grid').getSelection()[0];
		
		var activeTab = Ext.getCmp('viewportpanel').getActiveTab();
		
		if(row){
			
			Ext.ComponentQuery.query('#severity_id',activeTab)[0].setValue(row.get('id'));
			Ext.ComponentQuery.query('#severity_desc',activeTab)[0].setValue(row.get('desc'));
			
			this.getLookup().close();
		}
		
	},
	
	onAlarmBtnShowClick: function() {
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 1 - Visualizar
			activeTab = this.activateTab(1, row.get('id'), 'alarmform', null, true);
			
			if(activeTab){
			
				//Retorna Form
				var form = Ext.ComponentQuery.query('form',activeTab)[0].getForm();
				
				//Carrega registro no form
				form.loadRecord(row);
				
				//Campos a desabilitar
				var fields = Ext.ComponentQuery.query('form field',activeTab)
				
				//Desabilita Campos
				Ext.each(fields,function(f){f.setReadOnly(true)})
				
				//Seta Botão Confirma: 1 - Visualizar
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function() {this.fireEvent('read')});
				
			}
		}
	},
	
	onAlarmBtnEditClick: function(){
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 3 - Alterar
			activeTab = this.activateTab(3, row.get('id'), 'alarmform', null, true);
			
			if(activeTab){
				
				//Retorna Form
				var form = Ext.ComponentQuery.query('form',activeTab)[0].getForm();
				
				//Carrega registro no form
				form.loadRecord(row);
				
				//Seta Botão Confirma: Alterar
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function() {this.fireEvent('update')});
			}
		}
	},
	
	onAlarmBtnAddClick: function(){

			
		//Cria Aba: 2 - Incluir
		var activeTab = this.activateTab(2, null, 'alarmform', null, false);
		
		if(activeTab){
	
			//Seta Botão Confirma: Incluir
			Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function() {this.fireEvent('create')});
			
			//Habilita edição do ID
			Ext.ComponentQuery.query('#id' , activeTab)[0].setEditable(true);
		}


	},
	
	onAlarmBtnDeleteClick: function(){
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 4 - Excluir
			activeTab = this.activateTab(4, row.get('id'), 'alarmform', null, true);
			
			if(activeTab){
			
				//Retorna Form
				var form = Ext.ComponentQuery.query('form',activeTab)[0].getForm();
				
				//Carrega registro no form
				form.loadRecord(row);
				
				//Campos a desabilitar
				var fields = Ext.ComponentQuery.query('form field',activeTab)
				
				//Desabilita Campos
				Ext.each(fields,function(f){f.setReadOnly(true)})
				
				//Seta Botão Confirma: Exlcuir
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function() {this.fireEvent('remove')});
			}
		}
	},
	
	onAlarmBtnSubmitAdd: function(){
		
		var mainPanel	= Ext.getCmp('viewportpanel'),								//Aba Objecto Pai
			activeTab	= mainPanel.getActiveTab(),									//Aba ativa
			form		= Ext.ComponentQuery.query('form',activeTab)[0].getForm(),	//Formulario	
			values		= form.getValues(),											//Dados do Formulario
			store		= this.getAlarmStore(),										//Store
			record		= Ext.create('Sam.model.Alarm');							//Registro
		
		
		
		if(form.isValid()){
			
			//Carrega dados do Formulario no registro
			record.set(values);
			
			//Carrega Objetos
			record.set(
					{	group:		Ext.create('Sam.model.AlarmGroup'		,{id: values.group_id	, desc: values.group_desc	}),
						type:		Ext.create('Sam.model.AlarmType'		,{id: values.type_id	, desc: values.type_desc	}),
						model: 		Ext.create('Sam.model.EquipmentModel'	,{id: values.model_id	, desc: values.model_desc	}),
						severity:	Ext.create('Sam.model.SeverityLevel'	,{id: values.severity_id, desc: values.severity_desc}),
			});
			
			if(typeof values.alarm_id != 'undefined' && values.alarm_id !== ""){
				record.set(
					{	normAlarm:	Ext.create('Sam.model.Alarm'			,{id: values.alarm_id	, desc: values.alarm_desc	})
				});
			}
			
			//Adiciona registro na store
			store.add(record);
			
			//Sincroniza e Atualiza Store
			this.syncStore(store, '#alarmgrid');
			
			//Fecha Aba
			activeTab.close();
		}
	},
	
	onAlarmBtnSubmitEdit: function(){
		
		var mainPanel	= Ext.getCmp('viewportpanel'),								//Aba Objecto Pai
			activeTab	= mainPanel.getActiveTab(),									//Aba ativa
			form		= Ext.ComponentQuery.query('form',activeTab)[0].getForm(),	//Formulario	
			values		= form.getValues(),											//Dados do Formulario
			store		= this.getAlarmStore(),										//Store
			record		= form.getRecord();											//Registro
		
		if(form.isValid()){
			//Carrega dados do formulario na Store
			store.findRecord('id',record.get('id')).set(values);
			
			//Carrega Objetos
			store.findRecord('id',record.get('id')).set(
					{	group:		Ext.create('Sam.model.AlarmGroup'		,{id: values.group_id	, desc: values.group_desc	}),
						type:		Ext.create('Sam.model.AlarmType'		,{id: values.type_id	, desc: values.type_desc	}),
						model: 		Ext.create('Sam.model.EquipmentModel'	,{id: values.model_id	, desc: values.model_desc	}),
						severity:	Ext.create('Sam.model.SeverityLevel'	,{id: values.severity_id, desc: values.severity_desc}),
			});
			
			if(typeof values.alarm_id != 'undefined' && values.alarm_id !== ""){
				store.findRecord('id',record.get('id')).set(
					{	normAlarm:	Ext.create('Sam.model.Alarm'			,{id: values.alarm_id	, desc: values.alarm_desc	})
				});
			}
			
			//Sincroniza e Atualiza Store
			this.syncStore(store, '#alarmgrid');
			
			//Fecha Aba
			activeTab.close();
		}
	},
	
	onAlarmBtnSubmitDelete: function(){
		
		var mainPanel	= Ext.getCmp('viewportpanel'),								//Aba Objecto Pai
			activeTab	= mainPanel.getActiveTab(),									//Aba ativa
			form		= Ext.ComponentQuery.query('form',activeTab)[0].getForm(),	//Formulario	
			values		= form.getValues(),											//Dados do Formulario
			store		= this.getAlarmStore(),						//Store
			record		= form.getRecord();											//Registro
		
		if(form.isValid()){
			
			//Apaga registro da Store
			store.remove(record);
			
			//Sincroniza e Atualiza Store
			this.syncStore(store, '#alarmgrid');
			
			//Fecha Aba
			activeTab.close();
		}
	},
	
	/*********** End Of Alarm Controlling ***********/
	
	
	/*********** Common Methods***********/
	syncStore: function(store, comp){
		
		//Sincroniza Store
		store.sync({
			success: function(){
				
				//Recarrega Store
				store.reload();
				
				//Atualiza stores e views
				Ext.each(Ext.ComponentQuery.query(comp),function(f){
					f.getStore().reload();
				});
			},
			failure: function(){
				console.log('failure');
			},
			scope: this
		});
		
	},
	
	activateTab: function(action, id, xtype, uTitle, lockId){
		
		//Variaveis
		var title, tabId, activeTab;
		
		//Aba Objecto Pai
		var mainPanel = Ext.getCmp('viewportpanel');
		
		switch(action){
			
			//Visualizar
			case 1:
				title = 'Visualizar Cod: ' + id;
				tabId = 'show-' + xtype + '-' + id;
				break;
			
			//Incluir
			case 2:
				title = 'Incluir Novo Registro';
				tabId = 'add-' + xtype
				break;
			
			//Alterar
			case 3:
				title = 'Alterar Cod: ' + id;
				tabId = 'edit-' + xtype + '-' + id;
				break;
			
			//Excluir
			case 4:
				title = 'Excluir Cod: ' + id;
				tabId = 'delete-' + xtype + '-' + id;
				break;
			default:
				title = uTitle;
		
		}
		
		var newTab = mainPanel.items.findBy(
				function(tab){
					return tab.id === tabId;
				});
		
		if (!newTab) {
			newTab = mainPanel.add({
				id: tabId,
				xtype: xtype,
				closable: true,
				iconCls: 'magnifier-zoom',
				title: title
			});
		}
		
		//Seta Aba como ativa
		mainPanel.setActiveTab(newTab);
		
		//Se for inclusao desabilita o campo Id
		if(action == 2 && lockId){
			Ext.ComponentQuery.query('#id' , newTab)[0].setVisible(false);
		}
		
		//Variavel para retornar aba ativa
		activeTab = mainPanel.getActiveTab();
		
		return activeTab;
		
	}
	
});
