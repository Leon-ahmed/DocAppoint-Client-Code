'use client'
import Navlink from '@/components/Navlink';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';
import logo from "../../../public/logo.png"
import Image from 'next/image';
import { FaGoogle } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from 'next/link';

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
const RegisterPage = () => {

  const router=useRouter();
  const onSubmit =async (e) => {
    e.preventDefault();


   const formdata= new FormData(e.currentTarget);

  const name=formdata.get("name");
   const image = formdata.get("url");
  const email = formdata.get("email");
   const password = formdata.get("password");

  const {data,error}=await authClient.signUp.email({name,image,email,password})




   if(!error){
    router.push('/')
   }


  };




    return (
        <div className=" min-h-screen flex flex-row bg-[#F8F9FF] p-1  justify-center items-center">

            <div className="w-full max-w-4xl">




                <div className="flex flex-col md:flex-row border border-gray-50 shadow-xl rounded-4xl overflow-hidden">

                    <div className="w-full md:flex md:flex-col md:justify-center  md:w-1/2 bg-linear-to-r from-[#00685F] via-[#008378] to-[#006A61]  p-8   text-white md:font-bold text-xl font-medium md:text-3xl">
                        <Image src={logo} alt=''></Image>
                        <p>   Trusted
                            Healthcare
                            Appointments,
                            Backed
                            by
                            Verified
                            Doctors.</p>
                    </div>


                    <div className="w-full text-center md:w-1/2 bg-white shadow-2xl py-8 pl-2 pr-8  flex justify-center items-center ">
                        <div className="w-full space-y-3">

                            <div className="p-1 rounded-full space-x-2   w-6/12 mx-auto flex justify-center items-center text-[#565E74] bg-[#EFF4FF]">
                                <Navlink href="/login">Login</Navlink>
                                <Navlink href="/register">Register</Navlink>
                            </div>

                            <h2 className="text-xl font-medium">
                                Welcome Back
                            </h2>

                            <p>
                                Enter your credentials to access
                                your appointments and care records.
                            </p>

                            <Button className='text-[14px] font-medium bg-[#00685F]'>
                                <FaGoogle /> Continue with Google
                            </Button>

                            <div className="flex justify-center font-normal items-center gap-2 text-[#6D7A77]">
                                <hr className="flex-1" />
                                <span className="whitespace-nowrap">
                                    OR SIGN UP WITH EMAIL
                                </span>
                                <hr className="flex-1" />



                            </div>

                            {/*form  */}
                            <div>
                                <Form className="flex   w-96 flex-col gap-4" onSubmit={onSubmit}>
                                    <TextField
                                        isRequired
                                        name="name"
                                        type="text"
                                     
                                   className='text-start pl-2'>
                                        <Label>Name :</Label>
                                        <Input placeholder="john" />
                                        <FieldError />
                                    </TextField>
                                    <TextField
                                        
                                        name="url"
                                        type="url"
                                     
                                   className='text-start pl-2'>
                                        <Label>ImageUrl :</Label>
                                        <Input placeholder="https://image.com" />
                                        <FieldError />
                                    </TextField>
                                    <TextField
                                        isRequired
                                        name="email"
                                        type="email"
                                        validate={(value) => {
                                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                                return "Please enter a valid email address";
                                            }
                                            return null;
                                        }}
                                   className='text-start pl-2'>
                                        <Label>Email :</Label>
                                        <Input placeholder="john@example.com" />
                                        <FieldError />
                                    </TextField>
                                    <TextField
                                        isRequired
                                        minLength={8}
                                        name="password"
                                        type="password"
                                        validate={(value) => {
                                            if (value.length < 8) {
                                                return "Password must be at least 8 characters";
                                            }
                                            if (!/[A-Z]/.test(value)) {
                                                return "Password must contain at least one uppercase letter";
                                            }
                                            if (!/[0-9]/.test(value)) {
                                                return "Password must contain at least one number";
                                            }
                                            return null;
                                        }}
                                    className='text-start pl-2'>
                                        <Label>Password :</Label>
                                        <Input placeholder="Enter your password" />
                                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                                        <FieldError />
                                    </TextField>
                                    <div className="flex gap-2">
                                        <Button type="submit" className='bg-[#00685F]'>
                                          
                                            Submit
                                        </Button>
                                        <Button type="reset"  variant="secondary">
                                            Reset
                                        </Button>
                                    </div>
                                </Form>
                            </div>

                            <div>
                                <p>Already have an account?</p>
                                <div className='flex justify-center items-center text-[#00685F]'>  <Link href='/login'>Login here </Link><IoIosArrowRoundForward size={22} className='mt-1' /></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default RegisterPage;