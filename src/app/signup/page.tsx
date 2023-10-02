"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from "next/navigation"
import { Formik, Form } from "formik";
import { MyTextField } from '@/helper/TextInput'
import Link from "next/link"
import { regsiterFormValidate } from "@/schema/index"



const SignUp = () => {
  const router = useRouter();
  // const [user, setuser] = useState({
  //   username: "",
  //   email: "",
  //   password: ""
  // });

  // const signUp = async () => {
  //   console.log("CLICK ON SIGNUP");

  //   try {
  //     const response = await axios.post("/api/users/signup", user);
  //     console.log("sign up success", response);
  //     router.push("/login");
  //   } catch (error: any) {
  //     console.log(error, error);
  //   }

  // }


  return (
    <div className="main 
    flex justify-center 
    items-center flex-col 
  bg-black mx-auto 
  "
    >
      <h1 className="text-white text-2xl">Create Account </h1>
      <Image
        className="my-3"
        src="/assets/icons/signUP.png"
        alt="Sign UP"
        width={96}
        height={95}
      />
      <p className="text-white text-lg">Create account with</p>
      <div className="social-icons flex justify-center 
    items-center gap-2">
        <Image
          className="my-3 bg-white rounded-full cursor-pointer"
          src="/assets/icons/github.svg"
          alt="Sign UP"
          width={30}
          height={30}
        />
        <Image
          className="my-3  bg-white rounded-full cursor-pointer"
          src="/assets/icons/google.svg"
          alt="Sign UP"
          width={30}
          height={30}
        />
        <Image
          className="my-3  bg-white rounded-full cursor-pointer"
          src="/assets/icons/linkedin.svg"
          alt="Sign UP"
          width={30}
          height={30}
        />
      </div>
      <p className="text-white text-lg">or</p>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={regsiterFormValidate}
        onSubmit={async (data) => {
          console.log("DATA:", data);
          try {
            const response = await axios.post("/api/users/signup", data);
            console.log("sign up success", response);
            router.push("/login");
          } catch (error: any) {
            console.log(error, error);
          }

        }}
      >
        {(formik) => (


          <Form className="flex justify-center 
                    items-center flex-col">

            <div className="sub-input flex justify-center items-center gap-8">
              <Image
                className="my-3  bg-white rounded-full cursor-pointer "
                src="/assets/icons/user.svg"
                alt="Sign UP"
                width={32}
                height={32}
              />
              <MyTextField
                placeholder="name"
                name="name"
              />
            </div>
            <div className="sub-input flex justify-center 
    items-center gap-8">
              <Image
                className="my-3   bg-white cursor-pointer"
                src="/assets/icons/email.svg"
                alt="Sign UP"
                width={32}
                height={32}
              />
              <MyTextField
                placeholder="email"
                name="email"
              />
            </div>
            <div className="sub-input flex justify-center 
    items-center gap-8">
              <Image
                className="my-3 bg-white rounded-full cursor-pointer"
                src="/assets/icons/password.svg"
                alt="Sign UP"
                width={32}
                height={32}
              />
              <MyTextField
                placeholder="password"
                name="password"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700
       text-white font-bold py-1.5 
       px-8 my-6 rounded"
              // onClick={signUp}
              type='submit'
            >
              Signup
            </button>
          </Form>
        )}
      </Formik>
      <p className="text-white text-lg">or</p>
      <p className="text-white text-lg">Already have an account?</p>
      <Link href="/login" className="text-blue-500 font-bold py-1.5 px-8  rounded">Login</Link>
    </div>
  )
}

export default SignUp