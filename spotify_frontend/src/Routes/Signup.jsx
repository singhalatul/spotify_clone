import {Icon} from '@iconify/react';
import Input from "../components/shared/Input"
import PasswordInput from "../components/shared/PasswordInput"
import {Link} from "react-router-dom";

function Signup(){
    return(
        <>
            <div className="w-full h-full flex flex-col items-center">
                <div className="logo p-6 border-b border-solid border-gray-300 w-full flex justify-center"> 
                    <Icon icon="logos:spotify" width="165"/>
                </div>
                <div  className="InputRegion w-1/3 py-5 flex items-center justify-center flex-col "> 
                    <div className="font-bold mb-4 text-2xl">Sign up for free to start listening.</div>  
                    <Input 
                    label = "enter your Email "
                    placeholder="Email your email"
                    className="my-5"
                    />
                    <Input 
                    label = "Confirm Email Address"
                    placeholder="Enter your email again"
                    className="mb-5"
                    />
                    <PasswordInput 
                    label = "Password"
                    placeholder="Password"
                    
                    />
                    <Input 
                    label = "what should we call you?"
                    placeholder="Enter a profile name"
                    className="my-5"
                    />
                    <div className=" w-full flex justify-center my-8">
                        <button className="bg-green-600 font-semi-bold p-3 px-10 rounded-full">Sign up</button>
                    </div>
                    <div className="border-b border-solid border-gray-300 w-full"></div>
                    <div className="my-6 font-semibold">
                        Already have an account?
                    </div>
                    <div className="bg-app-green border border-gray-500 w-full flex justify-center py-4 rounded-full text-gray-600 font-bold">
                        <Link to="/login">LOG IN INSTEAD</Link>
                    </div>
                    
                </div>
            </div>        
        </>
    )
}

export default Signup;