Ext.define('Sam.store.SetorStore', {
	extend: 'Sam.lib.AutoStore',
	
	model: 'Sam.model.Setor',
	
	autoLoad: true,

	sorters: { property: 'id'},

	proxy: {
        
        api: {
        	read : 		'config/setor/load',
			create : 	'config/setor/add.action',
			update : 	'config/setor/update.action',
			destroy : 	'config/setor/delete.action',
        }
    }
});