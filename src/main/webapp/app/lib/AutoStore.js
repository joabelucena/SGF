Ext.define('Sam.lib.AutoStore', {
	extend: 'Ext.data.Store',
    
    alias: 'widget.autostore',
 
    constructor: function(config) {
        this.callParent(arguments);
        
//        Ext.apply(this, {storeId: this.$className});
//        this.setStoreId(this.$className);
    },
    
    proxy: {
        type: 'ajax',
        
        reader: {
            type: 'json',
            successProperty: 'success',
            root: 'data',
            messageProperty: 'message'
        },
        
        writer: {
            type: 'associatedjson',
            writeAllFields: true,
        },
        
        listeners: {
        	success: function(proxy, response, operation){
        		
        	},
        	
            exception: function(proxy, response, operation){
            	var ErrorMessage,jResp;
            	
            	try {
            		
            		//Parseia Retorno
            		jResp = Ext.JSON.decode(response.responseText);
            		
            		ErrorMessage = jResp.message; 

                }
                catch (ex) {
                	ErrorMessage = 'Problemas na requisição, favor entrar em contato com o Adminsitrador do sistema';
                }
            	
                //Exibir Mensagem
            	Ext.MessageBox.show({
			        title: 'Falha na Requisição',
			        msg: ErrorMessage,
			        buttons: Ext.MessageBox.OK,
			        icon: Ext.MessageBox.WARNING
				});
            	
            },
            scope: this,
        }
    }
    

});