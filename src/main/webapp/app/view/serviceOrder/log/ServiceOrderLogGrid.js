Ext.define('Sam.view.serviceOrder.log.ServiceOrderLogGrid' , {
	extend: 'Ext.grid.Panel',
	alias: 'widget.serviceorderloggrid',
	
	requires: ['Ext.grid.filters.Filters'],
	
	store: Ext.create('Sam.store.ServiceOrderLog'),
	
	scrollable: true,
	
	plugins: 'gridfilters',
    
	columns : [{
			text: 'Status Anterior',
			flex: 1,
			sortable: true,
			dataIndex: 'prevstatus_desc',
			filter: {
				type: 'string'
			}
		},{
			text: 'Status Posterior',
			flex: 1,
			sortable: true,
			dataIndex: 'curstatus_desc',
			filter: {
				type: 'string'
			}
		},{
			text: 'Usuario',
			flex: 1,
			sortable: true,
			dataIndex: 'user_id',
			filter: {
				type: 'string'
			}
		},{
			text: 'Data/Hora',
			flex: 1,
			sortable: true,
			dataIndex: 'datetime',
			renderer: Ext.util.Format.dateRenderer('d/m/Y - G:i:s'),
			filter: {
				type: 'date'
			}
		},{
			text: 'Observações',
			flex: 1,
			sortable: true,
			dataIndex: 'remark',
		}]
});