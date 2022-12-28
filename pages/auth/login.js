import {FcGoogle} from "react-icons/fc";
import {AiFillFacebook} from "react-icons/ai";
import {getAuth,GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from "../../utils/firebase";

const Login = () => {
    const googleProvider = new GoogleAuthProvider()

    const aa = getAuth()

    const GoogleLogin = async()=>{
        
        try {

            const result = await signInWithPopup(auth,googleProvider)
            console.log('User: ',result.user);

        } catch (error) {

            console.log("What is error: ",error);

        }
    }
    return ( 
        <>
            <div className=" max-w-md mx-auto drop-shadow-xl shadow-xl mt-5 p-7 text-center rounded-md">
                <h1 className=" text-2xl">Join Today</h1>
                <p className=" py-5">Sign in with one of the providers</p>
                <div className=" flex flex-col gap-3">
                    <button className=" bg-gray-700 flex justify-center items-center text-white py-2 rounded-md gap-2" onClick={GoogleLogin}> <FcGoogle/> Sign in with Google</button>
                    <button className=" bg-gray-700 flex justify-center items-center text-white py-2 rounded-md gap-2"> <AiFillFacebook/> Sign in with Facebook</button>
                </div>
            </div>
        </>
     );
}
 
export default Login;