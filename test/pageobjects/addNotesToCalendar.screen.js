class AddNotesToCalendar {
  get tapOnBurgerButton() {
    return $("//android.widget.ImageButton");
  }
  get checkCalendarBookmark() {
    return $('//*[@text="Calendar"]');
  }
  get monthView() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/month_view"]'
    );
  }
  get addNoteToDay() {
    return $("//*[@text='Add']");
  }
  get addText() {
    return $("//android.widget.LinearLayout");
  }
  async saveNote() {
    await driver.back();
    await driver.back();
  }
}

module.exports = new AddNotesToCalendar();
