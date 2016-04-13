Ext.define('Sam.model.Setor', {
	extend: 'Ext.data.Model',
	
	fields : [ {
		name : 'id',
		type : 'string'
	}, {
		name : 'desc',
		type : 'string'
	},

	/** ServiceOrder Aux Mappings * */
	{
		name : 'setorID',
		type : 'string',
		mapping : 'id'
	}, {
		name : 'setorDesc',
		type : 'string',
		mapping : 'desc'
	} ]
	
});