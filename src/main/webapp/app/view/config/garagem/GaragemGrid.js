Ext.define('Sam.view.config.garagem.GaragemGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.garagemgrid',

	requires : ['Ext.grid.filters.Filters'],
	           
	store : Ext.create('Sam.store.GaragemStore'),
	
	itemId: 'garagemgrid',

	columns : [ {
		text : 'Código',
		dataIndex : 'id',
		width: 100,
		sortable: true,
		filter : {
			type : 'string'
		}
	},{
		text : 'Descrição',
		flex : 1,
		sortable : true,
		dataIndex : 'desc'
	},{
		text : 'Sistema',
		flex : 1,
		sortable : true,
		dataIndex : 'sistemaDesc'
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