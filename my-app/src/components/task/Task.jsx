import { useState, useEffect } from "react";

export default function Task({key,name}){
    const [isDone, setIsDone] = useState(false);


    return <div className="task">
        <input type="checkbox" id={key} disabled={isDone}/>
        <label htmlFor={key}>{name}</label>
        <div className="actions">
            <span><img src="../../assets/edit.png" alt="edit icon"/></span>
            <span><img src="../../assets/detele.png" alt="delete icon" /></span>
        </div>
    </div>
}