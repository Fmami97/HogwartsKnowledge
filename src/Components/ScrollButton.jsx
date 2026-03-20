import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


export default function ScrollButton({visible}){
    library.add(fas)

    let classNames =  "scroll-button "+ (visible ?"visible":"hidden");

    return(
        <div  className={classNames} onClick={()=>{scrollTo({top:0,behavior:"smooth"})}}>
            <FontAwesomeIcon icon="fa-solid fa-angles-up" size="2xl" />
            
        </div>
    )
}