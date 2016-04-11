Ext.define('Sam.model.Estacao', {
	extend : 'Ext.data.Model',

	fields : [ {
		name : 'id',
		type : 'string',
		defaultValue : 0
	}, {
		name : 'scapID',
		type : 'string'
	}, {
		name : 'nome',
		type : 'string'
	}, {
		name : 'sigla',
		type : 'string'
	}, {
		name : 'longitude',
		type : 'number'
	}, {
		name : 'latitude',
		type : 'number'
	}, {
		name : 'posX',
		type : 'number'
	}, {
		name : 'posY',
		type : 'number'
	},
	
	/** Association Keys * */
	{
		name : 'geozoneID',
		type : 'string',
		mapping : 'geozone.id'
	}

	],

//	belongsTo : [ {
//		name : 'geozone',
//		model : 'Sam.model.Geozone',
//		foreignKey : 'geozoneID'
//	} ],

});