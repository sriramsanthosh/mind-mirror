import { LOGIN } from "../api/user";
import Button from '@mui/material/Button';
import Axios from "axios";
import { useState } from 'react';
import { useEffect } from "react";
import Loader from '../components/loader';
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {

    const Navigate = useNavigate();

    const [loader, setloader] = useState(false);

    const [user_id, setUserId] = useState();

    useEffect(()=>{
        if(!user_id){
            setUserId(localStorage.getItem("user_id"));
        }
    }, [Navigate, user_id]);


    function Login(e){
        e.preventDefault();
        setloader(true);
        let email = e.target.email.value;
        let password = e.target.password.value;
        try{
            Axios.post(LOGIN, { email, password}).then(async(res)=>{
                const {id, success_msg, error_msg, warn_msg} = res.data;
                toast.success(success_msg);
                toast.warn(warn_msg);
                toast.error(error_msg);
                if(success_msg){
                    localStorage.setItem("user_id", id);
                    Navigate(`/user-session/${id}`);
                    setTimeout(() => {
                        toast.success(success_msg);
                    }, 200);
                    setloader(false);
                }
                setloader(false);
            });
        }
        catch(err){
            alert(err);
        }
    }

    return(
        <>
        {loader && <Loader/>}
        <ToastContainer autoClose={2000} hideProgressBar />
        <form onSubmit={Login} className='signup-form'>
            <h2 className='logo-branding-container'><span onClick={(e)=>{
                e.preventDefault();
                Navigate("/");
            }}>Mind Mirror</span></h2>
            <h3 className='form-heading'>Log in</h3>
            <div className='form-components'><input type='email' id='email' className='input-component' required placeholder='Email *' /></div>
            <div className='form-components'><input type="password" id='password' className='input-component' required placeholder='Password *'/></div>
            <div className='form-components'><Button type='submit' variant="contained" color="success">Log in</Button></div>
            <p className="form-components">Don't have an account? <NavLink to="/register" className="link">SignUp</NavLink></p>
        </form>
        </>
    );
}

export default LoginForm;