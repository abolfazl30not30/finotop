"use client"

import React, {useState} from 'react';
import * as yup from "yup";
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik';
import {IconButton, InputAdornment} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import OtpInput from 'react-otp-input';
import {TailSpin} from "react-loader-spinner";
// import {useRegisterCheckOtpMutation} from "@/redux/features/register/RegisterSlice";
import {useRouter} from "next/navigation";

export default function GetOTPCode() {
    const router = useRouter();

    const [otpCode, setOtpCode] = useState('');
    // const [registerCheckOtp, { isLoading,error }] = useRegisterCheckOtpMutation()


    const validate = (values, props) => {
        const errors = {};

        if (otpCode.length < 4) {
            errors.otpCode = "لطفا کد اعتبارسنجی را کامل وارد کنید";
        }

        return errors;
    };

    const formik = useFormik({

        initialValues: {
            otp: "",
        },

        validate: validate,

        onSubmit: async ({otp},helper) => {
            try{
                // const userData = await registerCheckOtp({otp:otpCode,email:window.sessionStorage.getItem("email")}).unwrap()
                if(userData.status === "FAILED"){
                    helper.setFieldError("otpCode" ,"کد اعتبارسنجی نادرست است")
                }else {
                    router.push("/user-profile")
                }
            }catch (e){
                console.log(e)
            }

        },
    });

    return (
        <>
            <div className="w-[80%] md:w-[50%]">
                <div className="flex justify-center md:hidden mb-20">
                    <div className="w-[40%]">
                        <Image src="/redMICLogo.svg" alt="costumer" width={0}
                               height={0}
                               sizes="100vw"
                               style={{width: '100%', height: 'auto'}}/>
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="font-bold text-xl">
                        کد تایید را وارد کنید
                    </h3>
                </div>
                <div className="mt-5 mb-7">
                    <label htmlFor="name" className="text-[0.9rem] text-textGray mb-4">کد تایید برای شما ایمیل شد</label>
                </div>
                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit} method="POST">
                    <div className="flex flex-col w-full ">
                        <OtpInput
                            inputStyle={{width:"3.5rem",height:"3.5rem",backgroundColor:'transparent',border:"2px solid #D9D9D9",borderRadius:"0.4rem"}}
                            containerStyle="gap-2 flex justify-center flex-row-reverse"
                            inputType="number"
                            value={otpCode}
                            onChange={setOtpCode}
                            numInputs={4}
                            renderSeparator={<span>   </span>}
                            renderInput={(props) => <input {...props} />}
                        />
                        <div className=" mt-2">
                            <span className="text-mainRed text-[0.7rem]">
                                {formik.errors.otp}
                            </span>
                        </div>
                    </div>
                    <div className='mt-7'>
                        {isLoading ? (
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
                                تایید
                            </button>
                        ):(
                            <button type="submit"
                                    className="w-full rounded-[0.5rem] py-3 border border-solid border-1 border-mainRed font-bold text-mainRed bg-mainBlue text-white hover:bg-mainOrange ">تایید
                            </button>
                        )}
                    </div>
                </form>
                <div className="text-center mt-3">
                    <Link href="/" className="text-[0.9rem] font-bold">بازگشت به صفحه ورود</Link>
                </div>
            </div>
        </>
    )
}
