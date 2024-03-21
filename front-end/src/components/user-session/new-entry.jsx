import Axios from 'axios';
import ResponsiveAppBar from "./navbar";
import { NEW_ENTRY } from "../../api/user";
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../loader';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewEntry = () => {
    const Navigate = useNavigate();

    const [loader, setloader] = useState(false);

    async function handleNewEntry(e){
        e.preventDefault();
        setloader(true);
        let title = e.target.entryTitle.value;
        let date = e.target.entryDate.value;
        let entryMatter = e.target.entryMatter.value;
        let user_id = await localStorage.getItem("user_id");
        Axios.post(NEW_ENTRY, {title, date, entryMatter, user_id}).then(async(res)=>{
            
            const {success_msg, error_msg, warn_msg} = res.data;
            await Navigate(`/user-session/${user_id}`);
            setTimeout(() => {
                toast.warn(warn_msg);
                toast.error(error_msg);
                toast.success(success_msg);
            }, 500);


        });
    }

    return (
        <div>
            <ResponsiveAppBar />
            {loader && <Loader/>}
            {/* <ToastContainer autoClose={2000} hideProgressBar /> */}
            <form className="new-form-entry signup-form" onSubmit={handleNewEntry}>
                <h3 className='form-heading' style={{"padding-top":"80px"}}>Write an Entry</h3>
                <div className='form-components'><input type='text' id='entryTitle' className='input-component' style={{width: "70%", minWidth: "268px"}} required placeholder='Day Caption.. Happy, Angry, Mood off.. *' /></div>
                <div className='form-components'><input type="date" id='entryDate' className='input-component' style={{width: "70%", minWidth: "268px"}} required /></div>
                <div className='form-components'><textarea class="form-control input-component" id="entryMatter"  rows="7" placeholder="How was your day... ☺️"  style={{background:"transparent", width: "70%", minWidth: "268px", margin: "auto"}}></textarea></div>
                <div className='form-components'><button type="submit button" class="btn btn-success">Create</button></div>
            </form>
        </div>
    )
}
 
export default NewEntry;