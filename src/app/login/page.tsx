"use client"
import React, { useState } from "react"
import { toast } from 'react-toastify';
import { Formik, Form } from "formik";
import Image from "next/image"
import { MyTextField } from "@/helper/TextInput.js"
import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/navigation"
import { loginFormValidate } from "@/schema/index"

const Login = () => {
    const router = useRouter();
    // const [user, setuser] = useState({
    //     email: "",
    //     password: "",
    // });
    // const login = async () => {
    //     // try {
    //     //     const response = await axios.post("/api/users/login", user)
    //     //     console.log("login success", response);
    //     //     router.push("/profile");
    //     //     toast.success("login successfully!", {
    //     //         position: "top-right",
    //     //     })

    //     // } catch (error: any) {
    //     //     console.log(error, error.message,);
    //     //     toast.error("Invalid credentials!", {
    //     //         position: "top-right",
    //     //     })
    //     // }
    // }

    return (
        <div className="main 
          flex justify-center 
         items-center flex-col 
          bg-black
  "
        >

            <h1 className="text-white text-2xl">Welcome Back </h1>
            <Image
                className="my-3"
                src="/assets/icons/logIN.png"
                alt="Sign UP"
                width={96}
                height={95}
            />
            <p className="text-white text-lg">Login account with</p>
            <div className="social-icons flex justify-center  items-center gap-2">
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
                    email: "",
                    password: "",
                }}
                validationSchema={loginFormValidate}
                onSubmit={async (data) => {
                    console.log("DATA:", data);
                    try {
                        const response = await axios.post("/api/users/login", data)
                        console.log("login success", response);
                        router.push("/profile");
                        toast.success("login successfully!", {
                            position: "top-right",
                        })

                    } catch (error: any) {
                        console.log(error, error.message,);
                        toast.error("Invalid credentials!", {
                            position: "top-right",
                        })
                    }

                }}
            >
                {(formik) => (


                    <Form className="flex justify-center 
                    items-center flex-col">
                        <div className=" flex gap-4 mb-4" >
                            <Image
                                className="my-3   bg-white cursor-pointer"
                                src="/assets/icons/email.svg"
                                alt="Sign UP"
                                width={32}
                                height={32}
                            />

                            <MyTextField
                                name="email"
                                type="email"
                                placeholder="email"
                            />
                        </div>
                        <div className=" flex gap-4 mb-4" >
                            <Image
                                className="my-3 bg-white rounded-full cursor-pointer"
                                src="/assets/icons/password.svg"
                                alt="Sign UP"
                                width={32}
                                height={32}
                            />
                            <MyTextField
                                name="password"
                                type="password"
                                placeholder="********"
                            />
                        </div>
                        <div style={{ marginLeft: '8rem' }}>
                            <p className="text-white">Forgot password?</p>
                        </div>
                        {/* </div> */}

                        <button
                            className="bg-blue-500 hover:bg-blue-700
                          text-white font-bold py-1.5 
                            px-8 my-6 rounded"
                            // onClick={login}
                            type="submit"
                        >
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
            <p className="text-white text-lg">or</p>
            <p className="text-white text-lg">Want to create an account?</p>
            <Link href="/signup" className="text-blue-500 font-bold py-1.5 px-8  rounded">Signup</Link>
        </div>
    )
}

export default Login