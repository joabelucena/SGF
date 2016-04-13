Ext.define('Sam.store.EstacaoStore', {
	extend: 'Sam.lib.AutoStore',
	
	model: 'Sam.model.Estacao',
	
	storeId: 'EstacaoStore',
	
	autoLoad: true,

	sorters: { property: 'id'},

	proxy: {
        
        api: {
        	read : 		'config/estacao/load',
			create : 	'config/estacao/add.action',
			update : 	'config/estacao/update.action',
			destroy : 	'config/estacao/delete.action',
        }
    }
});