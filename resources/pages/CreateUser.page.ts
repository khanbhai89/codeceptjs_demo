import ProfilePage from "./Profile.page";

const { I } = inject();

class CreateUserPage {
  selectors = {
    passwordField: "#wpPassword2",
    retypePasswordField: "#wpRetype",
    emailField: "#wpEmail",
    createAccountButton: "#wpCreateaccount",
    usernameField: "#wpName2",
  };

  async createAccount(username: string, password: string, email: string) {
    I.fillField(this.selectors.usernameField, username);
    I.fillField(this.selectors.passwordField, password);
    I.fillField(this.selectors.retypePasswordField, password);
    I.fillField(this.selectors.emailField, email);
    I.click(this.selectors.createAccountButton);
    await I.waitForVisible(ProfilePage.selectors.userProfile);
  }
}

export default new CreateUserPage();
