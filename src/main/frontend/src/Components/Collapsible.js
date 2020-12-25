import { React, useState, useRef } from 'react'
import '../App.css';

const Collapsible = (props) =>{
    const [isActive, setActive] = useState(false);
    const parentRef = useRef()
    return(
        <div className="collapsible">
            <button className="toggle" onClick={()=>setActive(!isActive)}>{props.label}</button>
            <div className="content-parent" ref={parentRef} style={
                isActive?{height:parentRef.current.scrollHeight + 'px'}
                :{height: "0px"}}
            > 
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Collapsible