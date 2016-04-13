 Ext.application({
	name : 'Sam',
	
	requires: [ 'Sam.lib.AssociatedWriter'
	           ,'Sam.lib.AdvancedVType'
	           ,'Sam.lib.DateTimePicker'
	           ,'Sam.lib.DateTimeField'
	           ,'Sam.lib.GroupField'
	           ,'Sam.lib.AutoGrid'
	           ,'Sam.lib.AutoStore'
	           ,'Sam.lib.Util'],
	
	launch : function()
	{
		Ext.widget('mainviewport');
	},
	
	views: [
	        'MainViewport'
	        ],

	stores: ['Menu'],
   
	controllers: ['Menu', 'ConfigurationController', 'MonitorController']
});
