Ext.define('Sam.store.LinhaStore', {
	extend: 'Sam.lib.AutoStore',
	
	model: 'Sam.model.Linha',
	
	storeId: 'LinhaStore',
	
	autoLoad: true,

	sorters: { property: 'id'},

	proxy: {
        
        api: {
        	read : 		'config/linha/load',
			create : 	'config/linha/add.action',
			update : 	'config/linha/update.action',
			destroy : 	'config/linha/delete.action',
        }
    }
});