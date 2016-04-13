Ext.define('Sam.model.Garagem', {
	extend : 'Ext.data.Model',

	fields : [ {
		name : 'id',
		type : 'number',
		defaultValue : 0
	}, {
		name : 'desc',
		type : 'string'
	},

	/** Association Keys * */
	{
		name : 'sistemaID',
		type : 'number',
		mapping : 'sistema.id'
	},
	
	/** Grid Fields * */
	{
		name : 'sistemaDesc',
		type : 'string',
		mapping : 'sistema.desc'
	}

	],

	belongsTo : [ {
		name : 'sistema',
		model : 'Sam.model.Sistema',
		foreignKey : 'sistemaID'
	}],

});