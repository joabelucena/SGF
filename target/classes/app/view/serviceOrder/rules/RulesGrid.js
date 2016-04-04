Ext.define('Sam.view.serviceOrder.rules.RulesGrid', {
	extend : 'Ext.grid.Panel',
	
	alias : 'widget.serviceorderrulesgrid',

	requires : ['Ext.grid.filters.Filters'],
	           
	store : Ext.create('Sam.store.ServiceOrderRules'),
	
	itemId: 'serviceorderrulesgrid',

	columns : [ {
		text : 'Código',
		dataIndex : 'id',
		width: 100,
		sortable: true,
		filter : {
			type : 'number'
		}
	}, {
		text : 'Estado Atual',
		flex : 1,
		sortable : true,
		dataIndex : 'curstatus_desc',
		filter : {
			type : 'string'
		}
	}, {
		text : 'Próximo Estado',
		flex : 1,
		sortable : true,
		dataIndex : 'nxtstatus_desc',
		filter : {
			type : 'string'
		}
	}, {
		text : 'Perfil',
		flex : 1,
		sortable : true,
		dataIndex : 'role_desc',
		filter : {
			type : 'string'
		}
	}],
	
	dockedItems: [{
	    xtype: 'toolbar',
	    dock: 'bottom',
	    
	    items: [{
	        xtype:'button',
	        itemId:'btnShow',
	    	text:'Visualizar',
	        tooltip:'Visualizar Registro',
	        cls:'x-btn-default-small',
	        iconCls: 'tick-button'
	    },{
	    	xtype: 'tbseparator'
	    },{
	        xtype:'button',
	        itemId:'btnAdd',
	    	text:'Incluir',
	        tooltip:'Incluir Novo Registro',
	        cls:'x-btn-default-small',
	        iconCls: 'tick-button'
	    },{
	        xtype:'button',
	    	itemId:'btnEdit',
	    	text:'Alterar',
	        tooltip:'Editar Registro Selecionado',
	        cls:'x-btn-default-small',
	        iconCls: 'tick-button'
	    },{
	        xtype:'button',
	        itemId:'btnDelete',
	    	text:'Excluir',
	        tooltip:'Excluir Registro Selecionado',
	        cls:'x-btn-default-small',
	        iconCls: 'tick-button'
	    }]
	}]
});