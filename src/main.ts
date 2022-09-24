function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
    .createMenu("Custom Menu")
    .addItem("Show dialog", "showDialog")
    .addToUi();
}

function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile("Dialog")
    .setWidth(400)
    .setHeight(300);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
    .showModalDialog(html, "My custom dialog");
}

function processForm(formObject) {
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperties({
    name: formObject.name,
  });
}
