import CreateUserPage from "./CreateUser.page";
import LoginPage from "./Login.page";

const { I } = inject();

class HomePage {
  selectors = {
    logo: ".mw-logo",
    createAccountButton: "#p-createaccount",
    menu: "#p-personal-checkbox",
    loginItemMenu: ".vector-menu-content-item-login",
  };
  async open() {
    I.amOnPage("/");
    await I.waitForVisible(this.selectors.logo);
  }
  openCreateUser() {
    I.click(this.selectors.createAccountButton);
    I.waitForElement(CreateUserPage.selectors.createAccountButton);
  }
  openLoginUser() {
    I.click(this.selectors.menu);
    I.click(this.selectors.loginItemMenu);
    I.waitForElement(LoginPage.selectors.signInButton);
  }
}

export default new HomePage();
