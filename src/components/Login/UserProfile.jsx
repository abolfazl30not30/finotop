"use client"

import React, {useState} from 'react';
import * as yup from "yup";
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik';
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import axios from "axios";
import {useRegisterCreateUserMutation} from "@/redux/features/register/RegisterSlice";
import {useRouter} from "next/navigation";
import {setAccessToken} from "@/redux/api/authSlice";
import {useDispatch} from "react-redux";
import {useLoginMutation} from "@/redux/api/loginSlice";
import {TailSpin} from "react-loader-spinner";

export default function UserProfile() {
    const dispatch = useDispatch();
    const router = useRouter();
    const categoryItem =  [
        "دارویی",
        "شوینده",
        "بهداشتی",
        "صنایع غذایی",
        "خشکبار حبوبات",
        "آجیل و تنقلات",
        "صنایع سلولزی",
        "پلیمر و پلاستیک",
        "سبدگردان",
        "افق کوروش"
    ];

    const [registerCreateUser, { isLoading,error }] = useRegisterCreateUserMutation()

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const [login, { isLoginLoading,loginError }] = useLoginMutation()
    const schema = yup.object().shape({
        fullName: yup.string().required("لطفا ایمیل خود را وارد کنید"),
        category: yup.string().required("لطفا دسته بندی مورد نظر خود را انتخاب کنید"),
        password:yup.string().required("لطفا رمزعبور خود را وارد کنید")
    });

    const formik = useFormik({

        initialValues: {
            fullName: "",
            category:"",
            password:"",
            role:"USER"
        },

        validationSchema: schema,

        onSubmit: async (values) => {
            try{
                const userData = await registerCreateUser({...values,email:window.sessionStorage.getItem("email")}).unwrap()
                const userDate = await login({username:window.sessionStorage.getItem("email"),password:values.password}).unwrap()
                window.sessionStorage.setItem("password",values.password)
                dispatch(setAccessToken(userDate));
                router.push("/panel/chats")
            }catch (err){
                console.log(err)
            }
        },
    });

    return (
        <>
            <div className="w-[80%] md:w-[50%] mt-20">
                <div className="mb-7">
                    <h3 className="font-bold text-xl">
                        مشخصات كاربری
                    </h3>
                </div>
                <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit} method="POST">
                    <div className=" flex flex-col ">
                        <TextField
                            label="نام‌ونام‌خانوادگي"
                            type="text"
                            name="fullName"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                            inputProps={{style: {fontFamily: "Vazirmatn RD FD",letterSpacing:"0.05rem", textAlign: 'center'}}}
                            InputLabelProps={{style: {fontFamily: "Vazirmatn RD FD",fontSize:"0.8rem"}}}/>
                    </div>
                    <div>
                        <FormControl fullWidth error={formik.touched.category && Boolean(formik.errors.category)}>
                            <InputLabel id="demo-simple-select-label" sx={{fontFamily: "IranSans", fontSize: "0.8rem",color:"#9F9F9F"}}>دسته‌بندی</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formik.values.category}
                                name="category"
                                input={<OutlinedInput sx={{fontFamily: "Vazirmatn RD FD", fontSize: "0.8rem"}} label="دسته‌بندی" />}
                                sx={{fontFamily: "Vazirmatn RD FD", fontSize: "0.8rem"}}
                                onChange={formik.handleChange}>
                                <MenuItem
                                    sx={{fontSize: "0.8rem",fontFamily:"IranSans"}}
                                    key=""
                                    value=""

                                >
                                    هیچکدام
                                </MenuItem>
                                {  categoryItem.map((cate) => (
                                    <MenuItem
                                        sx={{fontSize: "0.8rem",fontFamily:"Vazirmatn RD FD"}}
                                        key={cate}
                                        value={cate}

                                    >
                                        {cate}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>{formik.touched.category && formik.errors.category}</FormHelperText>
                        </FormControl>
                    </div>
                    <div className="flex flex-col">
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
                                ثبت نام
                            </button>
                        ):(
                            <button type="submit"
                                    className="w-full rounded-[0.5rem] py-3 border border-solid border-1 border-mainRed font-bold text-mainRed bg-mainBlue text-white hover:bg-mainOrange ">ثبت نام
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
