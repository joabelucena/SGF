Ext.define('Sam.model.PontoControle', {
	extend : 'Ext.data.Model',

	fields : [ {
		name : 'id',
		type : 'number',
		defaultValue : 0
	}, {
		name : 'desc',
		type : 'string'
	}, {
		name : 'longitude',
		type : 'number'
	}, {
		name : 'latitude',
		type : 'number'
	},
	
	/** Association Keys **/
	{
		name : 'linhaID',
		type : 'string',
		mapping : 'linha.id'
	},
	
	/** Grid Fields * */
	{
		name : 'linhaDesc',
		type : 'string',
		mapping : 'linha.desc'
	}

	],

//	belongsTo : [ {
//		name : 'linha',
//		model : 'Sam.model.Linha',
//		foreignKey : 'linhaID'
//	} ],

});