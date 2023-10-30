import React from 'react'
import { useRef, useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const input_ref = useRef();
    const [inputval, setInputval] = useState();
    const navigate = useNavigate();
    // const inputChanged=(e)=>setInputval(e.target.value)
    // useEffect(()=>{
    //     input_ref.current.focus();
    // },[])
    const onsubmit=(e)=>{
        e.preventDefault();
        navigate("/Document")
    }
    
    return (
        <div className="App">      
        <img className="seminimg" src="Semin.jpg" alt="SeminPic" />
        <p className="title_text">
        Semin-Portfolio
        </p>
        <span>

        {/* <input
        type="password"
        className="title_input"
        placeholder="입장 코드"
        ref={input_ref}
        value={inputval}
        onChange={inputChanged}
        >
        </input> */}
        <button onClick={onsubmit}className="title_submit">입 장</button>
        </span>
        </div>
    )
}

export default Home