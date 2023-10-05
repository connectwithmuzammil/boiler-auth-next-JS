"use client";
import { Formik, Form } from "formik";
import { useState } from "react";
import axios from "axios";
import { MyTextField } from "@/helper/TextInput.js";
import { forgotPasswordFormValidate } from "@/schema/index";
import { toast } from "react-toastify";

const page = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="form">
      <h1 className=" text-4xl text-center font-bold mb-2">Forgot Password </h1>
      <p className="text-center mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <Formik
        initialValues={{ email: "" }}
        validationSchema={forgotPasswordFormValidate}
        onSubmit={async (data, { resetForm }) => {
          setLoading(true);
          try {
            await axios.post("/api/users/forgotpassword", data);
            console.log("data", data);
            toast.success("Please check your email", {
              position: "top-right",
            });
            resetForm();
          } catch (error) {
            console.log("error", error);
            toast.error("user not exists in our system", {
              position: "top-right",
            });
          } finally {
            setLoading(false);
          }
        }}
      >
        {(formik) => (
          <Form>
            <>
              <MyTextField placeholder="email" name="email" />
              <div className="flex flex-col items-center">
                <button
                  className={`bg-blue-500 hover:bg-blue-700
                          text-white font-bold py-1.5 
                            px-8 my-6 rounded ${
                              loading ? "cursor-not-allowed opacity-50" : ""
                            }`}
                  // onClick={login}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "sending..." : "send"}
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
