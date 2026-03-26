sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("myapp.controller.Main", {

        onInit: function () {
            console.log("App initialized successfully!");
        },

        onButtonPress: function () {
            MessageBox.show(
                "🎉 You have pressed this button!",
                {
                    title: "Button Clicked!",
                    actions: [MessageBox.Action.OK],
                    onClose: function () {
                        console.log("Popup closed!");
                    }
                }
            );
        }

    });
});