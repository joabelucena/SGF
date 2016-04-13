Ext.define('Sam.lib.Util', {

	/**
	 * Synchronizes store and refreshes all current opened objects that uses it
	 */
	syncStore : function(store, comp) {

		store.sync({
			success : function() {

				store.reload();

				Ext.each(Ext.ComponentQuery.query(comp), function(f) {
					f.getStore().reload();
				});
			},
			failure : function() {
				console.log('failure');
			},
			scope : this
		});

		return;

	},

	/**
	 * Handles window's behavior
	 */
	activateTab : function(action, id, xtype, uTitle, autoID) {

		// Set lock for true for auto increment column
		autoID = typeof autoID !== 'undefined' ? autoID : true;

		var title, tabId, activeTab;

		// Main View
		var mainPanel = Ext.getCmp('viewportpanel');

		switch (action) {

		// Retrieve
		case 1:
			title = 'Visualizar Cod: ' + id;
			tabId = 'show-' + xtype + '-' + id;
			break;

		// Add
		case 2:
			title = 'Incluir Novo Registro';
			tabId = 'add-' + xtype
			break;

		// Update
		case 3:
			title = 'Alterar Cod: ' + id;
			tabId = 'edit-' + xtype + '-' + id;
			break;

		// Delete
		case 4:
			title = 'Excluir Cod: ' + id;
			tabId = 'delete-' + xtype + '-' + id;
			break;
		default:
			title = uTitle;

		}

		var newTab = mainPanel.items.findBy(function(tab) {
			return tab.id === tabId;
		});

		if (!newTab) {
			newTab = mainPanel.add({
				id : tabId,
				xtype : xtype,
				closable : true,
				iconCls : 'magnifier-zoom',
				title : title
			});
		}

		// Seta Aba como ativa
		mainPanel.setActiveTab(newTab);

		/*
		 * ID field treatment. Must always be set as editable: false for it to
		 * work
		 */
		if (action === 2) {
				
			if(!autoID){
				Ext.ComponentQuery.query('#id', newTab)[0].setEditable(true);
			}else{
				Ext.ComponentQuery.query('#id', newTab)[0].allowBlank = true;
			}
			
		}

		// Open and activates the tab
		activeTab = mainPanel.getActiveTab();

		return activeTab;

	},

	/**
	 * Closes current activeTab
	 */
	closeActiveTab : function() {

		Ext.getCmp('viewportpanel').getActiveTab().close();

		return;
	}

});
