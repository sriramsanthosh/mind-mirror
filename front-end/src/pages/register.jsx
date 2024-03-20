import Button from '@mui/material/Button';
import Axios from "axios";
import { REGISTER } from '../api/user';
import { useState } from 'react';
import Loader from '../components/loader';
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/auth-pages.css';
import FooterSection2 from '../components/footer2';

const Register = () => {
    const [loader, setloader] = useState(false);
    const Navigate = useNavigate();
    function Register(e){
        e.preventDefault();
        setloader(true);
        let name = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        try{
            Axios.post(REGISTER, {name, email, password}).then(async(res)=>{
                const {success_msg, error_msg, warn_msg} = res.data;
                toast.warn(warn_msg);    
                toast.success(success_msg);
                toast.error(error_msg);
                setloader(false);
            });
        }
        catch(err){
            alert(err);
            
        }
    }
    
    return (

        <div className='auth-pages'>
            <ToastContainer autoClose={2000} hideProgressBar />
            {loader && <Loader/>}
            <div className='form-container'>
            <form onSubmit={Register} className='signup-form'>
                <h2 className='logo-branding-container'><span onClick={(e)=>{
                    e.preventDefault();
                    Navigate("/");
                }}>Mind Mirror</span></h2>
                <h3 className='form-heading'>Create an Account</h3>
                <div className='form-components'><input type='text' id='name' className='input-component' required placeholder='Name *' /></div>
                <div className='form-components'><input type='email' id='email' className='input-component' required placeholder='Email *' /></div>
                <div className='form-components'><input type="password" id='password' className='input-component' required placeholder='Password *'/></div>
                <div className='form-components'><Button type='submit' variant="contained" color="success">Register</Button></div>
                <p>Already have an account? <NavLink to="/login" className="link">Login</NavLink></p>
            </form>
            </div>
            <div style={{
                padding:"40px 0"
            }}>
                <FooterSection2 />
            </div>
        </div>
    );
}

export default Register;