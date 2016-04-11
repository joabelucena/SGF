Ext.define('Sam.view.config.estacao.EstacaoGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.estacaogrid',

	requires : ['Ext.grid.filters.Filters'],
	           
	store : Ext.create('Sam.store.EstacaoStore'),
	
	itemId: 'estacaogrid',

	columns : [ {
		text : 'Código',
		dataIndex : 'id',
		width: 100,
		sortable: true,
		filter : {
			type : 'string'
		}
	},{
		text : 'Sigla',
		dataIndex : 'sigla',
		width: 100,
		sortable: true,
		filter : {
			type : 'string'
		}
	},{
		text : 'Nome',
		dataIndex : 'nome',
		flex: 1,
		sortable: true,
		filter : {
			type : 'string'
		}
	},{
		text : 'Cod. SCAP',
		dataIndex : 'scapID',
		width: 100,
		sortable: true,
		filter : {
			type : 'string'
		}
	},{
		text : 'Geozone',
		width : 100,
		sortable : true,
		dataIndex : 'geozoneID'
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