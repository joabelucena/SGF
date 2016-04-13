Ext.define('Sam.model.Sistema', {
	extend : 'Ext.data.Model',

	fields : [ {
		name : 'id',
		type : 'string'
	}, {
		name : 'desc',
		type : 'string'
	},

	/** ServiceOrder Aux Mappings * */
	{
		name : 'sistemaID',
		type : 'string',
		mapping : 'id'
	}, {
		name : 'sistemaDesc',
		type : 'string',
		mapping : 'desc'
	} ]
});