Ext.define('Sam.view.serviceOrder.status.StatusForm', {
	extend: 'Ext.Panel',
	requires:['Sam.view.components.FormToolbar'],
	
	alias:  'widget.serviceorderstatusform',
	
	itemId: 'serviceorderstatusform',
	
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
			maxLength: 2,
			enforceMaxLength: true,
			allowBlank : true,
			editable: true,
			width: '20%',
			inputAttrTpl: " data-qtip='Código do Tipo de Ordem de Serviço' "
		},{
			fieldLabel : 'Exige Obs.?',
			itemId: 'remark',
			name: 'remark',
			store:  Ext.create('Sam.view.components.store.ComboBox'),
			queryMode: 'local',
			valueField: 'id',
	        displayField: 'desc',
			xtype : 'combobox',
			allowBlank : false,
			editable: false,
			width: '25%',
			inputAttrTpl: " data-qtip='Indica se para mudar para esse estado o usuário deve informar um motivo..' "
		},{
			fieldLabel : 'Descrição',
			itemId: 'desc',
			name: 'desc',
			allowBlank : false,
			width: '60%',
			inputAttrTpl: " data-qtip='Descrição do Tipo de Ordem de Serviço' "
		}],
		
		scrollable: true,
		
		dockedItems: [{
			xtype: 'formtoolbar'
		}]
	}]
});
