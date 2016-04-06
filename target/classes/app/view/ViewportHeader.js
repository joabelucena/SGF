Ext.define('Sam.view.ViewportHeader', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.viewportheader',
	
	height: 60,
	ui: 'footer',
	items: [{
			xtype: 'tbfill',
			width: '33%',
			html: "<img border='0' width='108px' height='30px' align='left' src='./resources/resources/img/logo-ttrans.png' />"
		},{
			xtype: 'tbfill',
			width: '34%',
			html: '<center><span style="color:#444D50;font-size:20px;font-weight:bold;">SGF - Sistema de Gestão de Frotas</span></center>'
		},{
			xtype: 'tbfill'
		},{
			xtype: 'button',
			width: '33%',
			itemId: 'logout',
			width: '55px',
			handler: function() {
				window.location = 'logout';
		    },
			text: 'Sair'
		}
	]
});