function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
    .createMenu("Custom Menu")
    .addItem("Show dialog", "showDialog")
    .addToUi();
}

function showDialog() {
  const template = HtmlService.createTemplateFromFile("Dialog");
  template.name = getName();
  const html = template.evaluate().setWidth(400).setHeight(300);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
    .showModalDialog(html, "My custom dialog");
}

function getName() {
  const userProperties = PropertiesService.getUserProperties();
  return userProperties.getProperty("name");
}

function processForm(formObject) {
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperties({
    name: formObject.name,
  });
}
