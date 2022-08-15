import FeedbackWallPage from "./Profile.page";

const { I } = inject();

class LoginPage {
  selectors = {
    passwordField: "#wpPassword1",
    signInButton: "#wpLoginAttempt",
    usernameField: "#wpName1",
  };
  async login(username: string, password: string) {
    I.fillField(this.selectors.usernameField, username);
    I.fillField(this.selectors.passwordField, password);
    I.click(this.selectors.signInButton);
    await I.waitForVisible(FeedbackWallPage.selectors.userProfile);
  }
}

export default new LoginPage();
