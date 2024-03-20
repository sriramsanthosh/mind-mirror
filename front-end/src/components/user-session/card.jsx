import { colors } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



const EntryCard = ({title, content, date, obj_Id}) => {
    const user_id = localStorage.getItem("user_id");
    const Navigate = useNavigate();

    const [divId, setDivId] = useState();
    const [day, setday] = useState("");
    const [month, setmonth] = useState("");
    const [year, setyear] = useState("");
    const [daySuperScript, setdaySuperScript] = useState("");
    const [months, setmonths] = useState();

    useEffect(()=>{
        setDivId(obj_Id);
        setday(date.slice(8, 10));
        setmonth(date.slice(5, 7)-1);
        setyear(date.slice(0, 4));
        setdaySuperScript(day[1]===1?"st":day[1]===2?"nd":"th")
        setmonths(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]);
    }, [])
    return (
        <div id={divId} className="language-box" onClick={(e)=>{
                e.preventDefault();
                Navigate(`/user-session/${user_id}/view-entry/${obj_Id}`);
            }}>
            {title && <h4 style={{overflow: "hidden", overflowWrap: "break-word"}}>{title.length>14? <span>{title.slice(0, 14)}...</span>: title}</h4>}
            {content && <p>{content.length>10? <span>{content.slice(0, 10)}...</span>: content}</p>}
            {months && <h6>{day}<sup>{daySuperScript}</sup> {months[month]}. {year}</h6>}
        </div>
    );
}

export default EntryCard;