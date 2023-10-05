"use client";
import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { MyTextField } from "@/helper/TextInput.js";
import { resetPasswordFormValidate } from "@/schema/index";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  // const [verified, setVerified] = useState(false);
  // const [error, setError] = useState(false);

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);


  return (
    <div className="form">
      <h1 className=" text-4xl text-center font-bold mb-2">Reset Password </h1>
      <p className="text-center mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <Formik
        initialValues={{ password: "" }}
        validationSchema={resetPasswordFormValidate}
        onSubmit={async (data: any) => {
          try {
            console.log("data", data);
            // const requestData = { data, token };
            await axios.post("/api/users/resetpassword", { token, data });
            toast.success("Password Changed successfully!", {
              position: "top-right",
            })
            router.push("/login");
          } catch (error) {
            console.log("error", error);
          }
        }}
      >
        {(formik) => (
          <Form>
            <>
              {/* <h2 className="p-2 bg-orange-500 text-black">{token ? `${token}` : "no token"}</h2>
              {verified && (
                <div>
                  <h2 className="text-2xl">password changed</h2>
                  <Link href="/login">
                    Login
                  </Link>
                </div>
              )}
              {error && (
                <div>
                  <h2 className="text-2xl bg-red-500 text-black">Error</h2>

                </div>
              )} */}
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
