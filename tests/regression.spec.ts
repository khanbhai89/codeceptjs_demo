import LoginPage from "../resources/pages/Login.page";
import ProfilePage from "../resources/pages/Profile.page";
import HomePage from "../resources/pages/Home.page";
import CreateUserPage from "../resources/pages/CreateUser.page";
import EditProfilePage from "../resources/pages/EditProfile.page";

import { config } from "node-config-ts";

Feature("Regression Tests");

Scenario("Successful Login", async () => {
  HomePage.open();
  await HomePage.openLoginUser();
  LoginPage.login(config.admin.username, config.admin.password);
})
  .tag("e2eTests")
  .tag("login")
  .tag("regression");

Scenario("Successful Account Creation", async () => {
  HomePage.open();
  await HomePage.openCreateUser();
  CreateUserPage.createAccount("test_user", "test1234", "test@test.com");
  // There is Anti-Spam CAPTCHA which will not allow creation of a account.
})
  .tag("e2eTests")
  .tag("createAccount")
  .tag("regression");

Scenario("Edit Profile", async () => {
  HomePage.open();
  await HomePage.openLoginUser();
  LoginPage.login(config.admin.username, config.admin.password);
  ProfilePage.openDetailProfile();
  EditProfilePage.openEditor();
  EditProfilePage.editAndSavePage(" Test Summary", "Test Content");
})
  .tag("e2eTests")
  .tag("editProfile")
  .tag("regression");
