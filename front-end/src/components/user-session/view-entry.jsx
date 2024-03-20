import  Axios  from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { EDIT_ENTRY, VIEW_ENTRY } from "../../api/user";
import ResponsiveAppBar from "./navbar";
import { ToastContainer, toast } from "react-toastify";

const ViewEntry = () => {
    const Location = useLocation();
    const Navigate = useNavigate();
    let { entry_id } = useParams();
    let user_id = localStorage.getItem("user_id");
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [editEntry, setEditEntry] = useState(false);
    
    let inputComponents = document.querySelectorAll(".input-component");

    useEffect(()=>{
        Axios.post(VIEW_ENTRY, {entry_id}).then(async(res)=>{
            setTitle(res.data.entryObj.title);
            setContent(res.data.entryObj.content);
            setDate(res.data.entryObj.date);
        });

    }, [title, content, date, entry_id]);
    
    async function handleEditEntry(e){
        e.preventDefault();
        let editedTitle=e.target.tempTitle.value;
        let editedContent=e.target.tempContent.value;
        let editedDate=e.target.tempDate.value
        await Axios.post(EDIT_ENTRY, {editedTitle, editedDate, editedContent, entry_id}).then(async (res)=>{
            toast.error(res.data.error_msg);
            toast.info(res.data.default_msg);
            Navigate(Location.pathname);
            if(await res.data.default_msg){
                setTitle(editedTitle);
                setDate(editedDate);
                setContent(editedContent);
            }
        });
        setEditEntry(false);
    }

    return (
        
        <div style={{width:'100%'}}>
            <ResponsiveAppBar />
            {!editEntry && 
            <div onClick={(e)=>{
                e.preventDefault();
                setEditEntry(true);
            }} style={{position:"absolute",
            right:"20px", bottom:"10px",cursor:"pointer", padding: "20px", fontWeight:"bold", borderRadius:"50%", backgroundColor:"brown", color:"white", border: "2px solid gray"}}>&nbsp;<i class="bi bi-pencil-fill"></i>&nbsp;
            </div>}                

            {!editEntry && <form style={{width:"100%"}}> 
                <div className='form-components' style={{position: "relative", width:"90%", padding:"10px"}}><input className="input-component" disabled type="text" defaultValue={title} style={{background:"transparent",cursor:"text", border: "none", color:"black", fontSize:"30px", width:"100%"}} /></div>
                <div className='form-components' style={{width:"90%", padding:"10px"}}><input className="input-component" type="date" defaultValue={date} name="" id="" disabled style={{background:"transparent",cursor:"text", border: "none", color:"black"}}/></div>
                <hr style={{height:"2px", width:"90%", padding:"0 10px"}} />
                <div className='form-components' style={{border: "none", width: "90%"}}>{content && <textarea defaultValue={content} disabled className="form-control input-component" id="entryMatter" placeholder="How was your day... ☺️"  style={{border:"none", resize:"none",fontSize:"14px", cursor:"text", background:"transparent", height:"75vh", minWidth: "268px", margin: "auto"}}></textarea>}</div>
            </form>}

            {editEntry && <div>
                <form className='edit-form-entry' onSubmit={handleEditEntry}>
                    <div className='form-components' style={{position: "relative", width:"90%", padding:"10px"}}><input className="input-component" type="text" defaultValue={title} id="tempTitle" style={{background:"transparent",cursor:"text", border: "none", color:"black", fontSize:"30px", width:"100%"}} /></div>
                    <div className='form-components' style={{width:"90%", padding:"10px"}}><input className="input-component" type="date" name="" id="tempDate" defaultValue={date} style={{background:"transparent",cursor:"text", border: "none", color:"black"}}/></div>
                    <hr style={{height:"2px", width:"90%", padding:"0 10px"}} />
                    <div className='form-components' style={{border: "none", width: "90%"}}><textarea className="form-control input-component" id="tempContent" defaultValue={content} placeholder="How was your day... ☺️"  style={{border:"none", resize:"none",fontSize:"14px", cursor:"text", background:"transparent", height:"75vh", minWidth: "268px", margin: "auto"}}></textarea></div>
                    <button type="submit" style={{position:"absolute", right:"20px", bottom:"10px",cursor:"pointer", padding: "20px",fontWeight:"bold", color:"white", borderRadius:"50%", backgroundColor:"#2E7D32", border: "2px solid gray"}}>&nbsp;<i className="fa-solid fa-check"></i>&nbsp;</button>
                </form>
                </div>
            }
        </div>
    );
}

export default ViewEntry;
