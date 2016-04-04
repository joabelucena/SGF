Ext.define('Sam.model.SiteType', {
	extend: 'Ext.data.Model',
	
	fields:[
	        
	        {name: 'id'		, type: 'number'	},
	        {name: 'desc'	, type: 'string'	}

	       ],
	       
	hasMany: {model: 'Sam.model.Site', foreignKey: 'type_id'}
});