 Ext.application({
	name : 'Sam',
	
	requires: [ 'Sam.lib.AssociatedWriter'
	           ,'Sam.lib.AdvancedVType'
	           ,'Sam.lib.DateTimePicker'
	           ,'Sam.lib.DateTimeField'
	           ,'Sam.lib.GroupField'
	           ,'Sam.lib.AutoGrid'],
	
	launch : function()
	{
		Ext.widget('mainviewport');
	},
	
	views: [
	        'MainViewport'
	        ],

	stores: ['Menu'],
   
	controllers: ['Menu']
});
