Ext.define('Sam.store.PontoControleStore', {
	extend: 'Sam.lib.AutoStore',
	
	model: 'Sam.model.PontoControle',
	
	autoLoad: true,

	sorters: { property: 'id'},

	proxy: {
        
        api: {
        	read : 		'config/pontoc/load',
			create : 	'config/pontoc/add.action',
			update : 	'config/pontoc/update.action',
			destroy : 	'config/pontoc/delete.action',
        }
    }
});