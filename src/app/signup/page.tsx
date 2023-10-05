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
    bg-black
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
      <p className="text-white text-lg mb-2">or</p>

      <Formik
        initialValues={{
          username: "",
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
          <Form className='w-80'>
            <MyTextField
              placeholder="name"
              name="username"
              type="text"
            />
            <MyTextField
              placeholder="email"
              name="email"
              type="email"
            />
            <MyTextField
              placeholder="********"
              name="password"
              type="password"
            />
            <div className="flex flex-col items-center">
              <button
                className="bg-blue-500 hover:bg-blue-700
                 text-white font-bold py-1.5 
                   mb-2 rounded min-w-full"
                // onClick={signUp}
                type='submit'
              >
                Signup
              </button>
            </div>
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