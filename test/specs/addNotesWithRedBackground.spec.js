const AddChecklist = require("../pageobjects/addChecklist.screen");
const ChangeScreenColor = require("../pageobjects/changeScreenColor.screen");
const SkipScreen = require("../pageobjects/skipScreen.screen");

describe("Change Screen color", () => {
  it.only("Should add note with the red background", async () => {
    await SkipScreen.skipBtn.click();
    await AddChecklist.addNoteButton.click();
    await ChangeScreenColor.addText.click();
    await ChangeScreenColor.changeColorSquare.click();
    await ChangeScreenColor.checkRedSquare.click();
    await ChangeScreenColor.addNote1.addValue("Go to the cinema");
    await ChangeScreenColor.saveNote();
  });
});
