import { useState } from 'react';
import { useEffect } from "react";
import Loader from '../components/loader';
import { useNavigate } from "react-router-dom";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/auth-pages.css';
import FooterSection2 from "../components/footer2";
import LoginForm from "../components/loginForm";

const Login = () => {

    const Navigate = useNavigate();

    const [loader, setloader] = useState(false);

    const [user_id, setUserId] = useState();

    useEffect(()=>{
        if(!user_id){
            async function gotoSession(){
                await setUserId(localStorage.getItem("user_id"));
            }
            gotoSession();
        }
    }, [Navigate, user_id]);

    if(user_id){
        setTimeout(() => {
            Navigate(`/user-session/${user_id}`);
        }, 500);
    }

    

    return (
        <div className="auth-pages">
            <ToastContainer autoClose={2000} hideProgressBar  />

            {loader && <Loader/>}
            <div className='form-container'>
                
                <LoginForm />
            </div>
            <div className="feed-container">
                <h1 className="text-center">

                </h1>
            </div>
        <div>
        <div style={{
            padding:"40px 0"
        }}>
            <FooterSection2 />
        </div>

        </div>
        
      </div>
    )
}

export default Login;