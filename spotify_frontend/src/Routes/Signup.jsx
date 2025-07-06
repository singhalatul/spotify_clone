import {Icon} from '@iconify/react';
import Input from "../components/shared/Input"
import PasswordInput from "../components/shared/PasswordInput"
import {Link,useNavigate} from "react-router-dom";
import { useEffect,useState } from 'react';
import {makeUnauthenticate} from '../utils/serverHelper';
import {useCookies} from 'react-cookie';


const Signup = ()=>{
   const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cookies,setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const signUp = async () => {
        if (email !== confirmEmail) {
            alert(
                "Email and confirm email fields must match. Please check again"
            );
            return;
        }
        const data = {email, password, username, firstName, lastName};
        const response = await makeUnauthenticate(
            '/auths/register',
            data
        );
        if (response && !response.err) {
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            // value/name/options 
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
                <div className="InputRegion w-1/3 py-5 flex items-center justify-center flex-col "> 
                    <div className="font-bold mb-4 text-2xl">Sign up for free to start listening.</div>  
                     <Input
                    label="Email address"
                    placeholder="Enter your email"
                    className="my-6"
                    value={email}
                    setValue={setEmail}
                />
                <Input
                    label="Confirm Email Address"
                    placeholder="Enter your email again"
                    className="mb-6"
                    value={confirmEmail}
                    setValue={setConfirmEmail}
                />
                <Input
                    label="Username"
                    placeholder="Enter your username"
                    className="mb-6"
                    value={username}
                    setValue={setUsername}
                />
                <PasswordInput
                    label="Create Password"
                    placeholder="Enter a strong password here"
                    value={password}
                    setValue={setPassword}
                />
                    <div className='w-full flex justify-between items-center space-x-3'>
                         <Input
                        label="First Name"
                        placeholder="Enter Your First Name"
                        className="my-6"
                        value={firstName}
                        setValue={setFirstName}
                    />
                    <Input
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                        className="my-6"
                        value={lastName}
                        setValue={setLastName}
                    />
                    </div>
                    <div className=" w-full flex justify-center my-8">
                        <button className="bg-green-600 font-semi-bold p-3 px-10 rounded-full"
                        onClick={(e) => {
                            e.preventDefault();
                            signUp();
                        }}>Sign up</button>
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