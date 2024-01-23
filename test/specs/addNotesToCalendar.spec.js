const SkipScreen = require("../pageobjects/skipScreen.screen");
const AddNotesToCalendar = require("../pageobjects/addNotesToCalendar.screen");
const ChangeScreenColor = require("../pageobjects/changeScreenColor.screen");
describe("addNotesToCalendar", () => {
  it("Should add note to calendar", async () => {
    await SkipScreen.skipBtn.click();
    await AddNotesToCalendar.tapOnBurgerButton.click();
    await AddNotesToCalendar.checkCalendarBookmark.click();
    await AddNotesToCalendar.monthView.click();
    await expect(AddNotesToCalendar.addNoteToDay).toBeDisplayed();
    await AddNotesToCalendar.addNoteToDay.click();
    await AddNotesToCalendar.addText.click();
    await ChangeScreenColor.addNote1.addValue("Go to the cinema");
    await ChangeScreenColor.saveNote();
  });
});
