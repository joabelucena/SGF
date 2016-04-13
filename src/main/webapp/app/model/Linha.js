Ext.define('Sam.model.Linha', {
	extend : 'Ext.data.Model',

	fields : [ {
		name : 'id',
		type : 'string',
		defaultValue : 0
	}, {
		name : 'desc',
		type : 'string'
	},
	
	/** ServiceOrder Aux Mappings * */
	{
		name : 'linhaID',
		type : 'string',
		mapping : 'id'
	}, {
		name : 'linhaDesc',
		type : 'string',
		mapping : 'desc'
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
	} ],

});