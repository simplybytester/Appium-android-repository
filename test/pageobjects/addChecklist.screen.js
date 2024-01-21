class AddChecklist {
  get addNoteButton() {
    return $('//*[@text="Add note"]');
  }
  get checklistOption() {
    return $('//*[@text="Checklist"]');
  }
  get addFirstItem() {
    return $('//*[@text="Add Item"]');
  }
  get writeFirstItem() {
    return $("//android.widget.EditText");
  }
  get confirmItem1() {
    return $("//android.widget.Button");
  }
  get addSecondItem() {
    return $('//*[@text="Add Item"]');
  }
  get writeSecondItem() {
    return $("//android.widget.EditText");
  }
  get confirmItem2() {
    return $("//android.widget.Button");
  }
}
module.exports = new AddChecklist();
