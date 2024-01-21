const SkipScreen = require("../pageobjects/skipScreen.screen");
const AddChecklist = require("../pageobjects/addChecklist.screen");

describe("Skip Screen", () => {
  it("Should click skip button on the screen", async () => {
    await SkipScreen.skipBtn.click();
    await expect(AddChecklist.addNoteButton).toBeDisplayed();
  });
});
