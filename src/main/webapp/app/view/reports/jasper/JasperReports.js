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
	    			
	    			var htmlText = '<embed width=100% height=100%'
	                    + ' type="application/pdf"'
	                    + ' alt="pdf"' 
	                    + ' src="data:application/pdf;inline,'
	                    + result.responseText
	                    + '"></embed>';
	    			
	    			var srcPDF = 'data:application/pdf; inline,'+ escape(result.responseText);
	    			console.log('passou aqui');
	    			me.add({
						xtype: 'container',
						layout: 'fit',
//						html: htmlText
						
						autoEl: {
							tag: 'embed',
							src: srcPDF,
							type: 'application/pdf',
							style: 'border: 0px; height:100% ; width:100%'
						}
	    			});
	    			
	    			me.autoRender = true;
	    		}	    			
	    	});
			
			
		}
			
	}
	
});