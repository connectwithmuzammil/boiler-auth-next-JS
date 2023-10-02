import * as Yup from "yup";

import {
    emailFieldInvalid,
    emailFieldError,
    phoneNumberFieldRequired,
    phoneNumberFieldInvalid,
    nameFieldLimit,
    passwordFieldMinimum
} from "@/helper/constant.js";

//Regex
let phoneRejex =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

//Email
export const email = Yup.string()
    .email(emailFieldInvalid)
    .required(emailFieldError);


// Password
// export const password = ({ min, reqMesg, isRequired, minMesg }) => {
//     reqMesg = reqMesg ? reqMesg : (reqMesg = passwordRequired);
//     minMesg = minMesg ? minMesg : (minMesg = passwordFieldMinimum);

//     if (typeof min === "number") {
//         return Yup.string().required(reqMesg).min(min, minMesg);
//     } else {
//         return Yup.string().required(reqMesg);
//     }
// };

export const password = Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short')
    // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')

//Confirm Password
export const confirmPassword = ({ reqMesg, isRequired, pass }) => {
    reqMesg = reqMesg ? reqMesg : (reqMesg = passwordRequired);

    return Yup.string()
        .required(reqMesg)
        .oneOf([Yup.ref(pass), null], passwordFieldNotMatched);
};

// Simple Text Field
// // export const textField = ({ min, reqMesg, minMesg }) => {
// //     min = typeof min === "number" ? min : (min = 3);
// //     reqMesg = reqMesg ? reqMesg : (reqMesg = "Required");
// //     minMesg = minMesg ? minMesg : (minMesg = nameFieldLimit);

// //     if (typeof min === "number") {
// //         return Yup.string().required(reqMesg).min(min, minMesg);
// //     }
// //     return Yup.string().required(reqMesg)
// // };


export const textField = Yup.string()
    .min(3, "Should be 3 or more characters")
    .required('Name is Required');

// Phone
export const phone = Yup.string()
    .required(phoneNumberFieldRequired)
    .matches(phoneRejex, phoneNumberFieldInvalid);

