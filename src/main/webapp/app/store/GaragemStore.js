Ext.define('Sam.store.GaragemStore', {
	extend: 'Sam.lib.AutoStore',
	
	model: 'Sam.model.Garagem',
	
	autoLoad: true,

	sorters: { property: 'id'},

	proxy: {
        
        api: {
        	read : 		'config/garagem/load',
			create : 	'config/garagem/add.action',
			update : 	'config/garagem/update.action',
			destroy : 	'config/garagem/delete.action',
        }
    }
});