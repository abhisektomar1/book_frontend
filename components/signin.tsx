"use client"
import { ChangeEvent, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation'
export const Signin = () => {
    const router = useRouter()
    const [postInputs, setPostInputs] = useState<any>({
        email: "",
        password: ""
    });

    async function sendRequest() {
        console.log(postInputs);
        
        try {
            const response = await axios.post(`http://localhost:4521/api/user/login`, postInputs);
            console.log(response.data.token);
            
            const jwt = response.data.token
            localStorage.setItem("token", jwt);
            localStorage.setItem("IsLogin", "true");

            router.push( "/books")
        } catch(e) {
            alert("Wrong credentials please try again later")
            // alert the user here that the request failed
        }
    }
    
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-5">
                    <div className="text-5xl font-extrabold text-center">
                        Login
                    </div>
                </div>
                <div className="pt-8">
                    <LabelledInput label="Username" placeholder="abhi@gmail.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }} />
                    <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                    <button  type="button" onClick={sendRequest} className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign in</button>
                </div>
                <div className="text-slate-500">
                        Don't have an account?
                        <Link href={"/signup"} className="pl-2 underline">
                        Sign up
                        </Link>
                    </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}