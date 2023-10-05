"use client";
import { Formik, Form } from "formik";
import axios from "axios";
import { MyTextField } from "@/helper/TextInput.js";
import { resetPasswordFormValidate } from "@/schema/index";
const page = () => {
  return (
    <div className="form">
      <h1 className=" text-4xl text-center font-bold mb-2">Reset Password </h1>
      <p className="text-center mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <Formik
        initialValues={{ password: "" }}
        validationSchema={resetPasswordFormValidate}
        onSubmit={async (data) => {
          try {
            await axios.post("/api/users/", data);
            console.log("data", data);
          } catch (error) {
            console.log("error", error);
          }
        }}
      >
        {(formik) => (
          <Form>
            <>
              <MyTextField
                placeholder="********"
                name="password"
                type="password"
              />
              <div className="flex flex-col items-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700
                          text-white font-bold py-1.5 
                            px-8 my-6 rounded"
                  // onClick={login}
                  type="submit"
                >
                  Confirm Password
                </button>
              </div>
            </>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default page;
