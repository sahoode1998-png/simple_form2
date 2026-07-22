sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function (Controller, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("simpleform2.controller.first"), {
        onSubmit() {
            var oview = this.getView();

            var sName = oview.byId("nameInput").getValue();
            var sEmail = oview.byId("emailInput").getValue();
            
            if(sName || sEmail){
             MessageBox.error("Please fill all fields")
             return;
            }

            MessageBox.show (
                "Name: " + sName + "/nEmail: " + sEmail,

                {
                    title: "Confirm",
                    actions: [MessageBox.Action.ok,MessageBox.Action.cancel],
                    onClose(Action) {
                        if(Action === "ok") {
                            MessageToast.show("Data saved")

                            oview.byId("nameInput").setValue("");
                            oview.byId("emailInput").setValue("")
                        }
                    }
                }
                        )

        }
    };
});