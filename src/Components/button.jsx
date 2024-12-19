import React from "react";
function Btn(props){
    return(
        <>
            <button className="btn" style={{backgroundColor: props.bgc, padding:`.65vw ${props.lrpad}` , borderRadius: "5px", border:"none", color: props.clr, fontWeight:"500"}}>{props.label}</button>
        </>
    )
}
export default Btn;