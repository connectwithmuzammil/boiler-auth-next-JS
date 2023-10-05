"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from "next/navigation"
import { Formik, Form } from "formik";
import { MyTextField } from '@/helper/TextInput'
import Link from "next/link"
import { regsiterFormValidate } from "@/schema/index"
import { toast } from "react-toastify";



const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
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
        onSubmit={async (data, { resetForm }) => {
          setLoading(true);
          try {
            const response = await axios.post("/api/users/signup", data);
            console.log("sign up success", response);
            if (response?.data?.body?.message === "user already exist") {
              toast.error('User already exists. Please log in.', {
                position: 'top-right'
              });
            } 
            else {
              toast.success('Account created successfully!', {
                position: 'top-right'
              });
              router.push('/login');
            }
            // toast.error(response.data.body.message, {
            //   position: "top-right"
            // });
            // router.push("/login");
            // resetForm();
          } catch (error: any) {
            console.log(error, error);

          } finally {
            setLoading(false);
            resetForm();
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
                className={`bg-blue-500 hover:bg-blue-700
                 text-white font-bold py-1.5 
                   mb-2 rounded min-w-full ${loading ? "cursor-not-allowed opacity-50" : ""
                  }`}
                disabled={loading}
                type='submit'
              >
                {loading ? "Loading..." : "Sign Up"}
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