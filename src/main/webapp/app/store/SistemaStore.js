Ext.define('Sam.store.SistemaStore', {
	extend: 'Sam.lib.AutoStore',
	
	model: 'Sam.model.Sistema',
	
	storeId: 'SistemaStore',
	
	autoLoad: true,

	sorters: { property: 'id'},

	proxy: {
        
        api: {
        	read : 		'config/sistema/load',
			create : 	'config/sistema/add.action',
			update : 	'config/sistema/update.action',
			destroy : 	'config/sistema/delete.action',
        }
    }
});