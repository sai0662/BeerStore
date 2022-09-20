/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
var regexObject = {
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-\"!@#%&\/,><\':;|_~`])\S{8,99}$/,
  //phNum: /^(?:\+\d{2})?\d{10}(?:,(?:\+\d{2})?\d{10})*$/,
  phNum: /^(?:\+?(\d{1,3}))?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
  txt: /^[A-Za-z]+$/,
  // phNum: /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/,
  dateVali: /^\d{4}\-\d{1,2}\-\d{1,2}$/,
  postalVali:
    /^((\d{5}-\d{4})|(\d{5})|([AaBbCcEeGgHhJjKkLlMmNnPpRrSsTtVvXxYy]\d[A-Za-z]\s?\d[A-Za-z]\d))$/,
  postalValiSmall:
    /^([AaBbCcEeGgHhJjKkLlMmNnPpRrSsTtVvXxYy][0-9][AaBbCcEeGgHhJjKkLlMmNnPpRrSsTtVvXxYy] ?)$/,
};
export const emailValidation = (email) => {
  if (email && !regexObject.email.test(email.replace(' ', ''))) {
    return true;
  } else {
    return false;
  }
};
export const phNumValidation = phNum => {
  if (phNum && !regexObject.phNum.test(phNum)) {
    return false;
  } else {
    return true;
  }
};
export const dateValidation = date => {
  var temp = date.split('/');
  var d = new Date(temp[1] + '/' + temp[0] + '/' + temp[2]);
  return (
    d &&
    d.getMonth() + 1 == temp[1] &&
    d.getDate() == Number(temp[0]) &&
    d.getFullYear() == Number(temp[2])
  );
};
export const checkPassword = Password => {
  if (Password && !regexObject.password.test(Password.replace(' ', ''))) {
    return false;
  } else {
    return true;
  }
};
export const textValidation = txt => {
  if (txt && !regexObject.txt.test(txt.replace(/\s/g, ''))) {
    return false;
  } else {
    return true;
  }
};
export const postalValidation = code => {
  if (code.length >= 3 && code.length < 5) {
    if (code && !regexObject.postalValiSmall.test(code)) {
      return false;
    } else {
      return true;
    }
  } else {
    if (code && !regexObject.postalVali.test(code)) {
      return false;
    } else {
      return true;
    }
  }
};


  //   const isValidEmail = val => {
  //     const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  //     return regx.test(val);
  //   };

  // const isValidPassword = text => {
  //   const regx =
  //     /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  //   return regx.test(text);
  // };