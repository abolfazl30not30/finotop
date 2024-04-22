"use client"

import React from 'react';
import * as yup from "yup";
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik';
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
export default function MainForm() {
    const router = useRouter();

    const schema = yup.object().shape({
        phoneNumber: yup.string().required("لطفا شماره همراه خود را وارد کنید"),
    });
    const isLoading = false;

    const formik = useFormik({

        initialValues: {
            phoneNumber: "",
        },

        validationSchema: schema,

        onSubmit: async (values) => {
            try{
                const userData = "New";
                if(userData.status ==="NEW"){
                    router.push("login/checkOTP");
                }else {
                    router.push("login/password");
                }
                window.sessionStorage.setItem("email",values.email)
            }catch (err){
                console.log(err)
            }
        },
    });

    return (
        <>
            <div className="w-[80%] md:w-[50%] mt-24">
                <div className="mb-5">
                    <h3 className="mb-2 font-bold text-xl">
                        ورود / ثبت نام
                    </h3>
                    <p className="mt-3 text-[0.9rem] text-neutral-400">لطفا شماره همراه خود را وارد کنید</p>
                </div>
                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit} method="POST">
                    <div className=" flex flex-col ">
                        <TextField
                            label="شماره همراه"
                            type="number"
                            name="phoneNumber"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                            inputProps={{style: {fontFamily: "Vazirmatn RD FD",fontWeight:"600",letterSpacing:"0.1rem", textAlign: 'center'}}}
                            InputLabelProps={{style: {fontFamily: "Vazirmatn RD FD",fontSize:"0.8rem"}}}/>
                    </div>

                    <div className=''>
                        {
                            isLoading ? (
                                <button disabled type="submit"
                                        className="flex gap-3 items-center justify-center w-full rounded-[0.5rem] py-3  border border-solid border-1 border-neutral-400 font-bold text-textGray bg-neutral-200">
                                    <TailSpin
                                        height="20"
                                        width="20"
                                        color="#4E4E4E"
                                        ariaLabel="tail-spin-loading"
                                        radius="1"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true} />
                                    بعدی
                                </button>
                            ) : (
                                <button type="submit"
                                        className="w-full rounded-[0.5rem] py-3 border border-solid border-1 border-mainRed font-bold text-mainRed bg-mainBlue text-white hover:bg-mainOrange ">بعدی
                                </button>
                            )
                        }
                    </div>
                </form>
                {/*<div className="text-center mt-3">*/}
                {/*    <Link href="/forgot-password" className="text-[0.9rem] font-bold">فراموشی رمز عبور</Link>*/}
                {/*</div>*/}
            </div>
        </>
    )
}
