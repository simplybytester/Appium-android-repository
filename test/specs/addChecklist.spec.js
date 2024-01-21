const AddChecklist = require("../pageobjects/addChecklist.screen");
const SkipScreen = require("../pageobjects/skipScreen.screen");

describe("Add Checklist", () => {
  it("Should add first note in application", async () => {
    await SkipScreen.skipBtn.click();
    await AddChecklist.addNoteButton.click();
    await AddChecklist.checklistOption.click();
    await AddChecklist.addFirstItem.click();
    await AddChecklist.writeFirstItem.addValue("shopping");
    await AddChecklist.confirmItem1.click();
    await AddChecklist.addSecondItem.click();
    await AddChecklist.writeSecondItem.addValue("loundry");
    await AddChecklist.confirmItem2.click();
  });
});
