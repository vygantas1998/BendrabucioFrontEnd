import {decode} from 'jsonwebtoken';
export const getCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
export const getOptions = () => {
    return {
        headers: {
            "Authorization": "Bearer " + getCookie("token")
        }
    }
}
export const isAdminRole = () => decode(getCookie("token")).role === "admin";