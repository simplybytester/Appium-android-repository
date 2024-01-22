class ChangeScreenColor {
  get changeColorSquare() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/color_btn"]'
    );
  }
  get addText() {
    return $(
      '//android.widget.ListView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/select_dialog_listview"]/android.widget.LinearLayout[1]'
    );
  }
  get checkRedSquare() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/txt1"]'
    );
  }
  get addNote1() {
    return $("//android.widget.EditText");
  }
  get viewNote() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
    );
  }
  async saveNote() {
    await driver.back();
    await driver.back();
  }
}
module.exports = new ChangeScreenColor();
