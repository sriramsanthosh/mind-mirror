import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../components/loader";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/user-session/navbar";
import { Card } from "@mui/material";
import EntryCard from "../components/user-session/card";
import { GET_ENTRIES } from "../api/user";
import Axios from "axios";

const UserSession = () => {
    
    const Navigate = useNavigate();
    const [loader, setloader] = useState();
    const [userEntriesData, setUserEntriesData] = useState();
    const [user_id, setUserId] = useState();

    useEffect(()=>{
        setloader(true);
        if(!user_id){
            async function gotoSession(){
                let id = await localStorage.getItem("user_id");
                await setUserId(localStorage.getItem("user_id"));
                await Axios.post(GET_ENTRIES, {id}).then(async(res)=>{
                    let entriesArray = await res.data.userEntriesData;
                    await setUserEntriesData(await entriesArray);
                });
            }
            gotoSession();
        }
        if(!localStorage.getItem("user_id")){
            setUserId();
        }
        setloader(false);
    }, [user_id, userEntriesData, loader]);

    // setloader(false);
    
    return(
        <div>
            {loader && <Loader/>}
            <ToastContainer autoClose={2000} hideProgressBar />
            <NavBar />
            <h3 className="text-center" style={{width:"80%", margin:"20px auto"}}>Your Private Sanctuary for Reflections, Dreams, and Inner whispers.</h3>
            <div className="language-box-container">
                {
                    userEntriesData && userEntriesData.map((entryObj)=>
                        <EntryCard obj_Id={entryObj._id} title={entryObj.title} content={entryObj.content} date={entryObj.date}/>
                    )   
                }
                <div className="language-box" style={{backgroundColor:"transparent", border: "none"}} onClick={(e)=>{
                    e.preventDefault();
                    Navigate(`/user-session/${user_id}/new-entry`);
                }}>
                <p style={{textAlign: "center", fontSize:"57px"}}><i className="bi bi-patch-plus-fill"></i></p>
                <p style={{fontSize:"12px", textAlign: 'center'}}>Add new entry</p>
                </div>
            </div>
            
         </div>
    )
}

export default UserSession;