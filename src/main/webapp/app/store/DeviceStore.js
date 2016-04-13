Ext.define('Sam.store.DeviceStore', {
	extend: 'Sam.lib.AutoStore',
	
	model: 'Sam.model.Device',
	
	storeId: 'DeviceStore',
	
	autoLoad: true,

	sorters: { property: 'id'},

	proxy: {
        
        api: {
        	read : 		'config/device/load',
			create : 	'config/device/add.action',
			update : 	'config/device/update.action',
			destroy : 	'config/device/delete.action',
        }
    }
});