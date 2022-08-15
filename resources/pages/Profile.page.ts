import EditProfilePage from "./EditProfile.page";

const { I } = inject();

class ProfilePage {
  selectors = {
    userProfile: "#pt-userpage-2",
  };
  openDetailProfile() {
    I.click(this.selectors.userProfile);
    I.waitForElement(EditProfilePage.selectors.editProfile);
  }
}

export default new ProfilePage();
