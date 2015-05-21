jQuery.sap.declare("KapselSampleOrders.util.Controller");

sap.ui.core.mvc.Controller.extend("KapselSampleOrders.util.Controller", {
	getEventBus : function () {
		return sap.ui.getCore().getEventBus();
	},

	getRouter : function () {
		return sap.ui.core.UIComponent.getRouterFor(this);
	}
});