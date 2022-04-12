export function isAuthenticated() {
  if(localStorage.getItem("user")) {
    return true;
  }
}


