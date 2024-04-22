"use client"

import React, {useState} from 'react';
import * as yup from "yup";
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik';
import {IconButton, InputAdornment} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import {log} from "next/dist/server/typescript/utils";
import {useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {setAccessToken} from "@/redux/api/authSlice";
import {TailSpin} from "react-loader-spinner";

export default function Password() {
    const router = useRouter();
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        password: yup.string().required("لطفا رمزعبور خود را وارد کنید"),
    });
    // const [login, { isLoading,error }] = useLoginMutation()

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const formik = useFormik({

        initialValues: {
            password: "",
        },

        validationSchema: schema,

        onSubmit: async ({password}) => {
            try{
                // const userDate = await login({username:window.sessionStorage.getItem("email"),password}).unwrap()
                dispatch(setAccessToken(userDate));
                window.sessionStorage.setItem("password",password)
                router.push("/panel/chats")
            }catch (err){
                console.log(err)
            }
        },
    });

    return (
        <>
            <div className="w-[80%] md:w-[50%] mt-24">
                <div className="mb-9">
                    <h3 className="font-bold text-xl">
                        ورود
                    </h3>
                </div>
                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit} method="POST">
                    <div className="flex flex-col ">
                        <TextField
                            label="رمزعبور"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            inputProps={{style: {fontFamily: "Vazirmatn RD FD", textAlign: 'center',letterSpacing:"0.1rem",paddingRight:"3.5rem"}}}
                            InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}>{showPassword ? <img src="/onVisible.svg" alt="onVisible"/> : <img src="/visible.svg" alt="visiable"/>}
                                            </IconButton>
                                        </InputAdornment>)}}
                            InputLabelProps={{style: {fontFamily: "Vazirmatn RD FD",fontSize:"0.8rem"}}}/>
                    </div>
                    <div className=''>
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
                                ورود
                            </button>
                        ):(
                            <button type="submit"
                                    className="w-full rounded-[0.5rem] py-3 border border-solid border-1 border-mainRed font-bold text-mainRed bg-mainBlue text-white hover:bg-mainOrange ">ورود
                            </button>
                        )}
                    </div>

                </form>
            </div>
        </>
    )
}
