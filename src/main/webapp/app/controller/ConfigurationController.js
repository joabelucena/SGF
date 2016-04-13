Ext.define('Sam.controller.ConfigurationController', {
	
	extend: 'Ext.app.Controller',
	
	xUtils: Ext.create('Sam.lib.Util'),
	
	views: [
	         'config.sistema.SistemaGrid'
	        ,'config.sistema.SistemaForm'
	        
	        ,'config.garagem.GaragemGrid'
	        ,'config.garagem.GaragemForm'
	        
	        ,'config.pontoControle.PontoControleGrid'
	        ,'config.pontoControle.PontoControleForm'
	        
	        ,'config.linha.LinhaGrid'
//	        ,'config.linha.LinhaForm'
	        
	        ,'config.setor.SetorGrid'
	        ,'config.setor.SetorForm'
	        
	        ,'config.estacao.EstacaoGrid'	        
	        ,'config.estacao.EstacaoForm'
	        
	        ,'config.device.DeviceGrid'
	        ,'config.device.DeviceForm'
	        
	        ,'config.trecho.TrechoGrid'
	        ,'config.trecho.TrechoForm'
	        ],
   
	init: function() {
		
		this.control({
			
			/** 
			 * Buttons Listeners: Sistema
			 */
			'#sistemaform toolbar #btnSubmit' :{
				create: this.onSistemaBtnSubmitAdd,
				read:   function(){Ext.getCmp('viewportpanel').getActiveTab().close()},
				update: this.onSistemaBtnSubmitEdit,
				remove: this.onSistemaBtnSubmitDelete,
				
			},

			'#sistemagrid toolbar #btnShow' :{
				click: this.onSistemaBtnShowClick
			},

			'#sistemagrid toolbar #btnEdit' :{
				click: this.onSistemaBtnEditClick
			},

			'#sistemagrid toolbar #btnAdd' :{
				click: this.onSistemaBtnAddClick
			},

			'#sistemagrid toolbar #btnDelete' :{
				click: this.onSistemaBtnDeleteClick
			},
			
			/** 
			 * Buttons Listeners: Garagem
			 */
			'#garagemform toolbar #btnSubmit' :{
				create: this.onGaragemBtnSubmitAdd,
				read:   function(){Ext.getCmp('viewportpanel').getActiveTab().close()},
				update: this.onGaragemBtnSubmitEdit,
				remove: this.onGaragemBtnSubmitDelete,
				
			},

			'#garagemgrid toolbar #btnShow' :{
				click: this.onGaragemBtnShowClick
			},

			'#garagemgrid toolbar #btnEdit' :{
				click: this.onGaragemBtnEditClick
			},

			'#garagemgrid toolbar #btnAdd' :{
				click: this.onGaragemBtnAddClick
			},

			'#garagemgrid toolbar #btnDelete' :{
				click: this.onGaragemBtnDeleteClick
			},
			
			/** 
			 * Buttons Listeners: PontoControle
			 */
			'#pontoform toolbar #btnSubmit' :{
				create: this.onPontoControleBtnSubmitAdd,
				read:   function(){Ext.getCmp('viewportpanel').getActiveTab().close()},
				update: this.onPontoControleBtnSubmitEdit,
				remove: this.onPontoControleBtnSubmitDelete,
				
			},

			'#pontogrid toolbar #btnShow' :{
				click: this.onPontoControleBtnShowClick
			},

			'#pontogrid toolbar #btnEdit' :{
				click: this.onPontoControleBtnEditClick
			},

			'#pontogrid toolbar #btnAdd' :{
				click: this.onPontoControleBtnAddClick
			},

			'#pontogrid toolbar #btnDelete' :{
				click: this.onPontoControleBtnDeleteClick
			},
			
			/** 
			 * Buttons Listeners: Setor
			 */
			'#setorform toolbar #btnSubmit' :{
				create: this.onSetorBtnSubmitAdd,
				read:   function(){Ext.getCmp('viewportpanel').getActiveTab().close()},
				update: this.onSetorBtnSubmitEdit,
				remove: this.onSetorBtnSubmitDelete,
				
			},

			'#setorgrid toolbar #btnShow' :{
				click: this.onSetorBtnShowClick
			},

			'#setorgrid toolbar #btnEdit' :{
				click: this.onSetorBtnEditClick
			},

			'#setorgrid toolbar #btnAdd' :{
				click: this.onSetorBtnAddClick
			},

			'#setorgrid toolbar #btnDelete' :{
				click: this.onSetorBtnDeleteClick
			},
			
			/** 
			 * Buttons Listeners: Estacao
			 */
			'#estacaoform toolbar #btnSubmit' :{
				create: this.onEstacaoBtnSubmitAdd,
				read:   function(){Ext.getCmp('viewportpanel').getActiveTab().close()},
				update: this.onEstacaoBtnSubmitEdit,
				remove: this.onEstacaoBtnSubmitDelete,
				
			},

			'#estacaogrid toolbar #btnShow' :{
				click: this.onEstacaoBtnShowClick
			},

			'#estacaogrid toolbar #btnEdit' :{
				click: this.onEstacaoBtnEditClick
			},

			'#estacaogrid toolbar #btnAdd' :{
				click: this.onEstacaoBtnAddClick
			},

			'#estacaogrid toolbar #btnDelete' :{
				click: this.onEstacaoBtnDeleteClick
			},
			
			/** 
			 * Buttons Listeners: Device
			 */
			'#deviceform toolbar #btnSubmit' :{
				create: this.onDeviceBtnSubmitAdd,
				read:   function(){Ext.getCmp('viewportpanel').getActiveTab().close()},
				update: this.onDeviceBtnSubmitEdit,
				remove: this.onDeviceBtnSubmitDelete,
				
			},

			'#devicegrid toolbar #btnShow' :{
				click: this.onDeviceBtnShowClick
			},

			'#devicegrid toolbar #btnEdit' :{
				click: this.onDeviceBtnEditClick
			},

			'#devicegrid toolbar #btnAdd' :{
				click: this.onDeviceBtnAddClick
			},

			'#devicegrid toolbar #btnDelete' :{
				click: this.onDeviceBtnDeleteClick
			},
			
			/** 
			 * Buttons Listeners: Trecho
			 */
			'#trechoform toolbar #btnSubmit' :{
				create: this.onTrechoBtnSubmitAdd,
				read:   function(){Ext.getCmp('viewportpanel').getActiveTab().close()},
				update: this.onTrechoBtnSubmitEdit,
				remove: this.onTrechoBtnSubmitDelete,
				
			},

			'#trechogrid toolbar #btnShow' :{
				click: this.onTrechoBtnShowClick
			},

			'#trechogrid toolbar #btnEdit' :{
				click: this.onTrechoBtnEditClick
			},

			'#trechogrid toolbar #btnAdd' :{
				click: this.onTrechoBtnAddClick
			},

			'#trechogrid toolbar #btnDelete' :{
				click: this.onTrechoBtnDeleteClick
			},
			
			
			
		});
	},
	
	/*********** Begin Sistema Controlling ***********/
	
	onSistemaBtnShowClick: function(me, e) {
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 1 - Visualizar
			activeTab = this.xUtils.activateTab(1, row.get('id'), 'sistemaform', null, false);
			
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
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('read')});
				
			}			
		}
	},
	
	onSistemaBtnEditClick: function(me, e){
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 3 - Alterar
			activeTab = this.xUtils.activateTab(3, row.get('id'), 'sistemaform', null, false);
			
			if(activeTab){
				
				//Retorna Form
				var form = Ext.ComponentQuery.query('form',activeTab)[0].getForm();
				
				//Carrega registro no form
				form.loadRecord(row);
				
				//Seta Botão Confirma: Alterar
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('update', me, e)});
			}
		}
	},
	
	onSistemaBtnAddClick: function(me, e){
		
		//Cria Aba: 2 - Incluir
		var activeTab = this.xUtils.activateTab(2, null, 'sistemaform', null, false);
		
		if(activeTab){
	
			//Seta Botão Confirma: Incluir
			Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e){this.fireEvent('create', me, e)});
		}

	},
	
	onSistemaBtnDeleteClick: function(me, e){
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 4 - Excluir
			activeTab = this.xUtils.activateTab(4, row.get('id'), 'sistemaform', null, false);
			
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
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('remove', me, e)});
			}
		}
	},
	
	onSistemaBtnSubmitAdd: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('SistemaStore'),		//Store
			record		= Ext.create('Sam.model.Sistema');	//Registro
		
		if(form.isValid()){
			
			//Carrega dados do Formulario no registro
			record.set(values);
			
			//Adiciona registro na store
			store.add(record);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#sistemagrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	onSistemaBtnSubmitEdit: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('SistemaStore'),		//Store
			record		= form.getRecord();					//Registro
		
		if(form.isValid()){
			//Carrega dados do formulario na Store
			store.findRecord('id',record.get('id')).set(values);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#sistemagrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	onSistemaBtnSubmitDelete: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('SistemaStore'),		//Store
			record		= form.getRecord();					//Registro
		
		if(form.isValid()){
		
			//Apaga registro da Store
			store.remove(record);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#sistemagrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	/*********** End Sistema Controlling ***********/
	
	/*********** Begin Garagem Controlling ***********/
	
	onGaragemBtnShowClick: function(me, e) {
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 1 - Visualizar
			activeTab = this.xUtils.activateTab(1, row.get('id'), 'garagemform', null);
			
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
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('read')});
				
			}			
		}
	},
	
	onGaragemBtnEditClick: function(me, e){
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 3 - Alterar
			activeTab = this.xUtils.activateTab(3, row.get('id'), 'garagemform', null);
			
			if(activeTab){
				
				//Retorna Form
				var form = Ext.ComponentQuery.query('form',activeTab)[0].getForm();
				
				//Carrega registro no form
				form.loadRecord(row);
				
				//Seta Botão Confirma: Alterar
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('update', me, e)});
			}
		}
	},
	
	onGaragemBtnAddClick: function(me, e){
		
		//Cria Aba: 2 - Incluir
		var activeTab = this.xUtils.activateTab(2, null, 'garagemform', null);
		
		if(activeTab){
	
			//Seta Botão Confirma: Incluir
			Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e){this.fireEvent('create', me, e)});
		}

	},
	
	onGaragemBtnDeleteClick: function(me, e){
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 4 - Excluir
			activeTab = this.xUtils.activateTab(4, row.get('id'), 'garagemform', null);
			
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
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('remove', me, e)});
			}
		}
	},
	
	onGaragemBtnSubmitAdd: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('GaragemStore'),		//Store
			record		= Ext.create('Sam.model.Garagem');	//Registro
		
		if(form.isValid()){
			
			//Carrega dados do Formulario no registro
			record.set(values);
			
			record.set({
				sistema			: Ext.create('Sam.model.Sistema'	,{id: values.sistemaID})
			});
			
			//Adiciona registro na store
			store.add(record);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#garagemgrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	onGaragemBtnSubmitEdit: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('GaragemStore'),		//Store
			record		= form.getRecord();					//Registro
		
		if(form.isValid()){
			//Carrega dados do formulario na Store
			store.findRecord('id',record.get('id')).set(values);
			
			store.findRecord('id',record.get('id')).set({
				sistema			: Ext.create('Sam.model.Sistema'	,{id: values.sistemaID})
			});
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#garagemgrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	onGaragemBtnSubmitDelete: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('GaragemStore'),		//Store
			record		= form.getRecord();					//Registro
		
		if(form.isValid()){
		
			//Apaga registro da Store
			store.remove(record);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#garagemgrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	/*********** End Garagem Controlling ***********/
	
	/*********** Begin PontoControle Controlling ***********/
	
	onPontoControleBtnShowClick: function(me, e) {
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 1 - Visualizar
			activeTab = this.xUtils.activateTab(1, row.get('id'), 'pontoform', null);
			
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
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('read')});
				
			}			
		}
	},
	
	onPontoControleBtnEditClick: function(me, e){
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 3 - Alterar
			activeTab = this.xUtils.activateTab(3, row.get('id'), 'pontoform', null);
			
			if(activeTab){
				
				//Retorna Form
				var form = Ext.ComponentQuery.query('form',activeTab)[0].getForm();
				
				//Carrega registro no form
				form.loadRecord(row);
				
				//Seta Botão Confirma: Alterar
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('update', me, e)});
			}
		}
	},
	
	onPontoControleBtnAddClick: function(me, e){
		
		//Cria Aba: 2 - Incluir
		var activeTab = this.xUtils.activateTab(2, null, 'pontoform', null);
		
		if(activeTab){
	
			//Seta Botão Confirma: Incluir
			Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e){this.fireEvent('create', me, e)});
		}

	},
	
	onPontoControleBtnDeleteClick: function(me, e){
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 4 - Excluir
			activeTab = this.xUtils.activateTab(4, row.get('id'), 'pontoform', null);
			
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
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('remove', me, e)});
			}
		}
	},
	
	onPontoControleBtnSubmitAdd: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('PontoControleStore'),		//Store
			record		= Ext.create('Sam.model.PontoControle');	//Registro
		
		if(form.isValid()){
			
			//Carrega dados do Formulario no registro
			record.set(values);
			
			record.set({
				linha			: Ext.create('Sam.model.Linha'	,{id: values.linhaID})
			});
			
			//Adiciona registro na store
			store.add(record);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#pontogrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	onPontoControleBtnSubmitEdit: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('PontoControleStore'),		//Store
			record		= form.getRecord();					//Registro
		
		if(form.isValid()){
			//Carrega dados do formulario na Store
			store.findRecord('id',record.get('id')).set(values);
			
			store.findRecord('id',record.get('id')).set({
				linha			: Ext.create('Sam.model.Linha'	,{id: values.linhaID})
			});
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#pontogrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	onPontoControleBtnSubmitDelete: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('PontoControleStore'),		//Store
			record		= form.getRecord();					//Registro
		
		if(form.isValid()){
		
			//Apaga registro da Store
			store.remove(record);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#pontogrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	/*********** End PontoControle Controlling ***********/
	
	/*********** Begin Setor Controlling ***********/
	
	onSetorBtnShowClick: function(me, e) {
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 1 - Visualizar
			activeTab = this.xUtils.activateTab(1, row.get('id'), 'setorform', null, false);
			
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
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('read')});
				
			}			
		}
	},
	
	onSetorBtnEditClick: function(me, e){
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 3 - Alterar
			activeTab = this.xUtils.activateTab(3, row.get('id'), 'setorform', null, true);
			
			if(activeTab){
				
				//Retorna Form
				var form = Ext.ComponentQuery.query('form',activeTab)[0].getForm();
				
				//Carrega registro no form
				form.loadRecord(row);
				
				//Seta Botão Confirma: Alterar
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('update', me, e)});
			}
		}
	},
	
	onSetorBtnAddClick: function(me, e){
		
		//Cria Aba: 2 - Incluir
		var activeTab = this.xUtils.activateTab(2, null, 'setorform', null, true);
		
		if(activeTab){
	
			//Seta Botão Confirma: Incluir
			Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e){this.fireEvent('create', me, e)});
		}

	},
	
	onSetorBtnDeleteClick: function(me, e){
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 4 - Excluir
			activeTab = this.xUtils.activateTab(4, row.get('id'), 'setorform', null, true);
			
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
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('remove', me, e)});
			}
		}
	},
	
	onSetorBtnSubmitAdd: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('SetorStore'),		//Store
			record		= Ext.create('Sam.model.Setor');	//Registro
		
		if(form.isValid()){
			
			//Carrega dados do Formulario no registro
			record.set(values);
			
			//Adiciona registro na store
			store.add(record);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#setorgrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	onSetorBtnSubmitEdit: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('SetorStore'),		//Store
			record		= form.getRecord();					//Registro
		
		if(form.isValid()){
			//Carrega dados do formulario na Store
			store.findRecord('id',record.get('id')).set(values);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#setorgrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	onSetorBtnSubmitDelete: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('SetorStore'),		//Store
			record		= form.getRecord();					//Registro
		
		if(form.isValid()){
		
			//Apaga registro da Store
			store.remove(record);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#setorgrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	/*********** End Setor Controlling ***********/
	
	/*********** Begin Estacao Controlling ***********/
	
	onEstacaoBtnShowClick: function(me, e) {
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 1 - Visualizar
			activeTab = this.xUtils.activateTab(1, row.get('id'), 'estacaoform', null, false);
			
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
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('read')});
				
			}			
		}
	},
	
	onEstacaoBtnEditClick: function(me, e){
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 3 - Alterar
			activeTab = this.xUtils.activateTab(3, row.get('id'), 'estacaoform', null, false);
			
			if(activeTab){
				
				//Retorna Form
				var form = Ext.ComponentQuery.query('form',activeTab)[0].getForm();
				
				//Carrega registro no form
				form.loadRecord(row);
				
				//Seta Botão Confirma: Alterar
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('update', me, e)});
			}
		}
	},
	
	onEstacaoBtnAddClick: function(me, e){
		
		//Cria Aba: 2 - Incluir
		var activeTab = this.xUtils.activateTab(2, null, 'estacaoform', null, false);
		
		if(activeTab){
	
			//Seta Botão Confirma: Incluir
			Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e){this.fireEvent('create', me, e)});
		}

	},
	
	onEstacaoBtnDeleteClick: function(me, e){
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 4 - Excluir
			activeTab = this.xUtils.activateTab(4, row.get('id'), 'estacaoform', null, false);
			
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
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('remove', me, e)});
			}
		}
	},
	
	onEstacaoBtnSubmitAdd: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('EstacaoStore'),		//Store
			record		= Ext.create('Sam.model.Estacao');	//Registro
		
		if(form.isValid()){
			
			//Carrega dados do Formulario no registro
			record.set(values);
			
			record.set({
				geozone			: Ext.create('Ext.data.Model'	,{id: values.geozoneID})
			});
			
			//Adiciona registro na store
			store.add(record);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#estacaogrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	onEstacaoBtnSubmitEdit: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('EstacaoStore'),		//Store
			record		= form.getRecord();					//Registro
		
		if(form.isValid()){
			//Carrega dados do formulario na Store
			store.findRecord('id',record.get('id')).set(values);
			
			store.findRecord('id',record.get('id')).set({
				geozone			: Ext.create('Ext.data.Model'	,{id: values.geozoneID})
			});
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#estacaogrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	onEstacaoBtnSubmitDelete: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('EstacaoStore'),		//Store
			record		= form.getRecord();					//Registro
		
		if(form.isValid()){
		
			//Apaga registro da Store
			store.remove(record);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#estacaogrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	/*********** End Estacao Controlling ***********/
	
	/*********** Begin Device Controlling ***********/
	
	onDeviceBtnShowClick: function(me, e) {
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 1 - Visualizar
			activeTab = this.xUtils.activateTab(1, row.get('id'), 'deviceform', null, false);
			
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
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('read')});
				
			}			
		}
	},
	
	onDeviceBtnEditClick: function(me, e){
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 3 - Alterar
			activeTab = this.xUtils.activateTab(3, row.get('id'), 'deviceform', null, false);
			
			if(activeTab){
				
				//Retorna Form
				var form = Ext.ComponentQuery.query('form',activeTab)[0].getForm();
				
				//Carrega registro no form
				form.loadRecord(row);
				
				//Seta Botão Confirma: Alterar
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('update', me, e)});
			}
		}
	},
	
	onDeviceBtnAddClick: function(me, e){
		
		//Cria Aba: 2 - Incluir
		var activeTab = this.xUtils.activateTab(2, null, 'deviceform', null, false);
		
		if(activeTab){
	
			//Seta Botão Confirma: Incluir
			Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e){this.fireEvent('create', me, e)});
		}

	},
	
	onDeviceBtnDeleteClick: function(me, e){
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 4 - Excluir
			activeTab = this.xUtils.activateTab(4, row.get('id'), 'deviceform', null, false);
			
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
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('remove', me, e)});
			}
		}
	},
	
	onDeviceBtnSubmitAdd: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('DeviceStore'),		//Store
			record		= Ext.create('Sam.model.Device');	//Registro
		
		if(form.isValid()){
			
			//Carrega dados do Formulario no registro
			record.set(values);
			
			//Adiciona registro na store
			store.add(record);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#devicegrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	onDeviceBtnSubmitEdit: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('DeviceStore'),		//Store
			record		= form.getRecord();					//Registro
		
		if(form.isValid()){
			//Carrega dados do formulario na Store
			store.findRecord('id',record.get('id')).set(values);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#devicegrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	onDeviceBtnSubmitDelete: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('DeviceStore'),		//Store
			record		= form.getRecord();					//Registro
		
		if(form.isValid()){
		
			//Apaga registro da Store
			store.remove(record);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#devicegrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	/*********** End Device Controlling ***********/
	
	/*********** Begin Trecho Controlling ***********/
	
	onTrechoBtnShowClick: function(me, e) {
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 1 - Visualizar
			activeTab = this.xUtils.activateTab(1, row.get('id'), 'trechoform', null, false);
			
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
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('read')});
				
			}			
		}
	},
	
	onTrechoBtnEditClick: function(me, e){
		
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 3 - Alterar
			activeTab = this.xUtils.activateTab(3, row.get('id'), 'trechoform', null, false);
			
			if(activeTab){
				
				//Retorna Form
				var form = Ext.ComponentQuery.query('form',activeTab)[0].getForm();
				
				//Carrega registro no form
				form.loadRecord(row);
				
				//Seta Botão Confirma: Alterar
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('update', me, e)});
			}
		}
	},
	
	onTrechoBtnAddClick: function(me, e){
		
		//Cria Aba: 2 - Incluir
		var activeTab = this.xUtils.activateTab(2, null, 'trechoform', null, false);
		
		if(activeTab){
	
			//Seta Botão Confirma: Incluir
			Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e){this.fireEvent('create', me, e)});
		}

	},
	
	onTrechoBtnDeleteClick: function(me, e){
		//Linha selecionada
		var row = Ext.getCmp('viewportpanel').getActiveTab().getSelection()[0];
		
		//Tem Registro Selecionado
		if(row){
			
			//Cria Aba: 4 - Excluir
			activeTab = this.xUtils.activateTab(4, row.get('id'), 'trechoform', null, false);
			
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
				Ext.ComponentQuery.query('#btnSubmit',activeTab)[0].setHandler(function(me, e) {this.fireEvent('remove', me, e)});
			}
		}
	},
	
	onTrechoBtnSubmitAdd: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('TrechoStore'),		//Store
			record		= Ext.create('Sam.model.Trecho');	//Registro
		
		if(form.isValid()){
			
			//Carrega dados do Formulario no registro
			record.set(values);
			
			record.set({
				origem			: Ext.create('Sam.model.Estacao'	,{id: values.origemID}),
				destino			: Ext.create('Sam.model.Estacao'	,{id: values.destinoID}),
				setor			: Ext.create('Sam.model.Setor'		,{id: values.setorID}),
			});
			
			//Adiciona registro na store
			store.add(record);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#trechogrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	onTrechoBtnSubmitEdit: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('TrechoStore'),		//Store
			record		= form.getRecord();					//Registro
		
		if(form.isValid()){
			//Carrega dados do formulario na Store
			store.findRecord('id',record.get('id')).set(values);
			
			store.findRecord('id',record.get('id')).set({
				origem			: Ext.create('Sam.model.Estacao'	,{id: values.origemID}),
				destino			: Ext.create('Sam.model.Estacao'	,{id: values.destinoID}),
				setor			: Ext.create('Sam.model.Setor'		,{id: values.setorID}),
			});
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#trechogrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	onTrechoBtnSubmitDelete: function(me, e){
		
		var form		= me.up('form')						//Formulario	
			values		= form.getValues(),					//Dados do Formulario
			store		= Ext.getStore('TrechoStore'),		//Store
			record		= form.getRecord();					//Registro
		
		if(form.isValid()){
		
			//Apaga registro da Store
			store.remove(record);
			
			//Sincroniza e Atualiza Store
			this.xUtils.syncStore(store, '#trechogrid');
			
			//Fecha Aba
			this.xUtils.closeActiveTab();
		}
	},
	
	/*********** End Trecho Controlling ***********/
	
});
