import {Icon} from '@iconify/react';
import Input from "../components/shared/Input"
import PasswordInput from "../components/shared/PasswordInput"
import {Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { makeUnauthenticate } from '../utils/serverHelper';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Cookies,setCookie] = useCookies();
    const navigate = useNavigate();

     const login = async () => {
            const data = {email, password};
            const response = await makeUnauthenticate(
                '/auths/login',
                data
            );
            if (response && !response.err) {
                const token = response.token;
                const date = new Date();
                date.setDate(date.getDate() + 30);
                // /name/value/options 
                setCookie("token", token, {path: "/", expires: date});
                alert("Success");
                navigate("/home");
            } else {
                alert("Failure");
            }
        };
    return(
        <>
            <div className="w-full h-full flex flex-col items-center">
                <div className="logo p-6 border-b border-solid border-gray-300 w-full flex justify-center"> 
                    <Icon icon="logos:spotify" width="165"/>
                </div>
                <div  className="InputRegion w-1/3 py-5 flex items-center justify-center flex-col "> 
                    <div className="font-bold mb-4">To continue, log in to spotify</div>  
                    <Input 
                    label = "Email Id or username"
                    placeholder="Email address or username"
                    className="my-5"
                    value={email}
                    setValue={setEmail}
                    />
                    <PasswordInput 
                    label = "Password"
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    
                    />
                    <div className=" w-full flex justify-end my-8">
                        <button className="bg-green-600 font-semi-bold p-3 px-10 rounded-full"
                        onClick={(e)=>{
                            e.preventDefault();
                            login();
                        }}
                        >LOG IN</button>
                    </div>
                    <div className="border-b border-solid border-gray-300 w-full"></div>
                    <div className="my-6 font-semibold">
                        Don't have an account?
                    </div>
                    <div className="bg-app-green border border-gray-500 w-full flex justify-center py-4 rounded-full text-gray-600 font-bold">
                        <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
                    </div>
                    
                </div>
            </div>        
        </>
    )
}

export default Login;