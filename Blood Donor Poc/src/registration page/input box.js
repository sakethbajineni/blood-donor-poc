import React from "react";
export default function InputBox(props){
    return(
        <div className="input">
          
        
      
       <input type={props.type} onChange={props.onChange} className={props.className} id={props.id} name={props.name} value={props.value}  style={props.style} onBlur={props.onBlur} pattern={props.pattern} inputMode={props.inputMode}/>

      
      
        </div>
    )
}