import * as Yup from "yup";
import { email, password, textField } from "./formSchema"
import { errorsKey } from "@/helper/constant";

const { passwordFieldError, nameFieldError } = errorsKey;

export const loginFormValidate = Yup.object({
    email,
    password
    // password: password({ reqMesg: passwordFieldError }),
});

// Register form Validation
export const regsiterFormValidate = Yup.object({
    name: textField,
    email,
    password,
    // confirmPassword: confirmPassword({
    //     reqMesg: passwordFieldError,
    //     pass: "password",
    // }),
});