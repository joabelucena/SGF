Ext.define('Sam.model.Trecho', {
	extend : 'Ext.data.Model',

	fields : [ {
		name : 'id',
		type : 'string',
		defaultValue : 0
	}, {
		name : 'desc',
		type : 'string'
	},

	/** Association Keys **/
	{
		name : 'setorID',
		type : 'number',
		mapping : 'setor.id'
	},{
		name : 'origemID',
		type : 'string',
		mapping : 'origem.id'
	},{
		name : 'destinoID',
		type : 'string',
		mapping : 'destino.id'
	},
	
	/** Grid Fields **/
	{
		name : 'setorDesc',
		type : 'string',
		mapping : 'setor.desc'
	},{
		name : 'origemDesc',
		type : 'string',
		mapping : 'origem.nome'
	},{
		name : 'destinoDesc',
		type : 'string',
		mapping : 'destino.nome'
	}

	]

});