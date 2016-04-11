Ext.define('Sam.store.TrechoStore', {
	extend: 'Sam.lib.AutoStore',
	
	model: 'Sam.model.Trecho',
	
	autoLoad: true,

	sorters: { property: 'id'},

	proxy: {
        
        api: {
        	read : 		'config/trecho/load',
			create : 	'config/trecho/add.action',
			update : 	'config/trecho/update.action',
			destroy : 	'config/trecho/delete.action',
        }
    }
});