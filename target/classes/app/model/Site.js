Ext.define('Sam.model.Site', {
	extend: 'Ext.data.Model',
	
	fields:[
	        
	        {name: 'id'				, type: 'number'								},
	        {name: 'desc'			, type: 'string'								},
	        {name: 'shortname'		, type: 'string'								},
	        
	        //Station Aux Fields
	        {name: 'station_id'		, type: 'number'	, mapping: 'station.id'		},
	        {name: 'station_desc'	, type: 'string'	, mapping: 'station.desc'	},
	        
	        //Type Aux Fields
	        {name: 'type_id'		, type: 'number'	, mapping: 'type.id'		},
	        {name: 'type_desc'		, type: 'string'	, mapping: 'type.desc'		},
	        
	        //Parent Aux Fields
	        {name: 'parent_id'		, type: 'number'	, mapping: 'parent.id'		},
	        {name: 'parent_desc'	, type: 'string'	, mapping: 'parent.desc'	},
	        
	        /** Form Aux Mappings **/
			{name: 'site_id'		, type: 'number'	, mapping: 'id'				},
			{name: 'site_desc'		, type: 'string'	, mapping: 'desc'			}

	       ],
	       

	       belongsTo:  [
	                    {model: 'Sam.model.SiteType'		, foreignKey: 'type_id'},
	                    {model: 'Sam.model.ServiceStation'	, foreignKey: 'station_id'}
	                   ]

});