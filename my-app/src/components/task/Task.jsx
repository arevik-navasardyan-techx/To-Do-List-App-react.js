import { useState, useEffect } from "react";

export default function Task({name}){
    const [isDone, setIsDone] = useState(false);


    return <div className="task">
        <input type="checkbox" id="task" disabled={isDone}/>
        <label htmlFor="task">{name}</label>
        <div className="actions">
            <span><img src="../../assets/edit.png" alt="edit icon"/></span>
            <span><img src="../../assets/detele.png" alt="delete icon" /></span>
        </div>
    </div>
}