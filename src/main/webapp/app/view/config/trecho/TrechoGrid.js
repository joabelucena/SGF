Ext.define('Sam.view.config.trecho.TrechoGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.trechogrid',

	requires : ['Ext.grid.filters.Filters'],
	           
	store : Ext.create('Sam.store.TrechoStore'),
	
	itemId: 'trechogrid',

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
		text : 'Origem',
		width: 150,
		sortable : true,
		dataIndex : 'origemDesc'
	},{
		text : 'Destino',
		width: 150,
		sortable : true,
		dataIndex : 'destinoDesc'
	},{
		text : 'Setor',
		width: 150,
		sortable : true,
		dataIndex : 'setorDesc'
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