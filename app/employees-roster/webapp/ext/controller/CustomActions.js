sap.ui.define(["sap/m/MessageToast"], function (MessageToast) {
  "use strict";

  function _extController(extensionAPI) {
    //Local Variable
    let uploadDialog;

    function closeDialog() {
      uploadDialog && uploadDialog.close();
    }

    function byId(sId) {
      return sap.ui.core.Fragment.byId("settingsFragment", sId);
    }

    // Return
    return {
      onBeforeOpen: function (event) {
        uploadDialog = event.getSource();
        extensionAPI.addDependent(uploadDialog);
      },

      onAfterClose: function (event) {
        extensionAPI.removeDependent(uploadDialog);
        uploadDialog.destroy();
        uploadDialog = undefined;
      },

      onCancel: function () {
        closeDialog();
      },

      // onFileChange: function () {
      //   let resume = byId("uploadResume").getValue();
      //   let binaryContent;

      //   if (resume) {
      //     let fileReader = new FileReader();
      //     fileReader.onload = function (e) {
      //       // The result is the raw binary data as a string (if using readAsBinaryString)
      //       // or a Base64 encoded string (if using readAsDataURL)
      //       binaryContent = e.target.result;

      //       // Store the binary content in a model or a local variable
      //       // this.getModel("viewModel").setProperty(
      //       //   "/binaryContent",
      //       //   binaryContent,
      //       // );
      //       // this.getModel("viewModel").setProperty("/fileName", oFile.name);
      //     }.bind(this);
      //   }

      //   console.log("checkpoint");
      // },

      onSubmit: function (event) {
        let firstName = byId("iFirstName").getValue();
        let lastName = byId("iLastName").getValue();
        let that = this;
        let actionName = "/processApplication(...)";

        // Get the file details & convert to binary
        let file = byId("uploadResume").getFocusDomRef().files[0];
        this.fileName = byId("uploadResume").getValue();
        this.fileType = file.type;

        let reader = new FileReader();
        reader.onload = function (e) {
          let content = e.currentTarget.result;
          // that.updateFile(that.fileName, that.fileType, content);

          let payloadResume = {
            fileName: firstName,
            fileType: lastName,
            content: content,
          };

          return new Promise((resolve, reject) => {
            const actionContextBinding = byId("uploadResume")
              .getModel()
              .bindContext(actionName); // Bind Action
            actionContextBinding.setParameter("params", payloadResume); // Bind Parameters
            actionContextBinding.execute().then(() => {
              const actionContext = actionContextBinding.getBoundContext();

              // Get the response
              let response = actionContext.getObject().value;

              // if (sResponse == "Saved") {
              //   closeDialog();
              //   resolve(MessageToast.show("Configurations set!"));
              // }
            });
          });
        };

        reader.readAsDataURL(file);
      },

      // onSave: function (event) {
      //     let sAsOfDate = (byId('DP1')).getValue(),
      //         sActionName = '/SaveSettings(...)',
      //         aParameters = [];

      //     // Payload
      //     let oPayload = {
      //         application: 'inppostdocument',
      //         setting: 'asofdate',
      //         value: sAsOfDate
      //     };

      //     // Add to Parameters
      //     aParameters.push(oPayload);

      //     // Call Action
      //     return new Promise((resolve, reject) => {
      //         const oActionContextBinding = (byId('DP1')).getModel().bindContext(sActionName); // Bind Action
      //         oActionContextBinding.setParameter("params", aParameters); // Bind Parameters
      //         oActionContextBinding.execute().then(() => {
      //             const oActionContext = oActionContextBinding.getBoundContext();

      //             // Get the response
      //             let sResponse = oActionContext.getObject().value;

      //             if (sResponse == 'Saved') {
      //                 closeDialog();
      //                 resolve(MessageToast.show('Configurations set!'))
      //             };
      //         });
      //     });
      // },
    };
  }

  // View Functions
  return {
    onApply: async function (event) {
      let self = this;

      //Opens the custom fragment created...
      this.loadFragment({
        id: "settingsFragment",
        name: "employeesroster.ext.fragments.ApplicationForm", //Filepath of the fragment
        controller: _extController(self),
      }).then(function (fragment) {
        fragment.open();
      });
    },
  };
});
