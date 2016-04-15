Ext.define('Sam.view.reports.jasper.JasperReports', {
	extend: 'Ext.Panel',
	
	alias:  'widget.jasper',
	
	layout: {
        type: 'fit'
    },
	
	/***** Ajax Request Before Render *****/
	listeners: {
		beforerender:  function(me,eOpts) {
			
			var label = this.xRPT;
			
			var data = {
						"label"				: label	,
						"Cartao de"			: "0"	,
						"Cartao ate"		: "999"	,
						"Nome de"			: "A"	,
						"Nome ate"			: "Z"	,
						"Tipo Cartao de"	: "VT"	,
						"Tipo Cartao ate"	: "VT"
						}
			
			var rpt = {
					xtype: 'container',
					layout: 'fit',
					autoEl: {
						tag: 'iframe',
						style: 'border: 0px; height:100% ; width:100%'
					}
			}
			
			var param = Ext.create('Ext.data.Model',data);
			
			Ext.Ajax.request({
	    		url : 'report',
	    		method : 'POST',
	    		
	    		params: {
	    			label: label
	    		},
	    		
	    		jsonData: data,
	
	    		success: function (result, request) {
	    			me.add({
						xtype: 'container',
						layout: 'fit',
						autoEl: {
							tag: 'iframe',
							html: result.responseText,
							style: 'border: 0px; height:100% ; width:100%'
						}
	    			});
	    			
	    			me.autoRender = result;
	    		}	    			
	    	});
			
			
		}
			
	}
	
});