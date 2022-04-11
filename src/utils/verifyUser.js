function verifyUser() {
    if (!localStorage.getItem("user")) {
      window.location.assign("/");
    }
  }
  
  export default verifyUser;
  