import ProfilePage from "./Profile.page";

const { I } = inject();

class EditProfilePage {
  selectors = {
    content: "#mw-content-text",
    editProfile: "#ca-edit",
    saveButton: "#wpSave",
    summaryField: "#wpSummary",
    textBox: "#wpTextbox1",
  };
  openEditor() {
    I.click(this.selectors.editProfile);
    I.waitForElement(this.selectors.textBox);
  }
  async editAndSavePage(summary: string, details: string) {
    I.click(this.selectors.textBox);
    I.type(details);
    I.fillField(this.selectors.summaryField, summary);
    I.click(this.selectors.saveButton);
    const text = I.grabTextFrom(this.selectors.content);
    I.assertEqual(text, details);
  }
}

export default new EditProfilePage();
