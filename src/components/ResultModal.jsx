import React, { useImperativeHandle, useRef } from "react";
import {createPortal} from 'react-dom';


export default function ResultModal ({refDialog,targetTime,remainingTime,handleReset}){
    const dialog = useRef();
    const userLost = remainingTime <= 0 ; 
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000))* 100);
    
    useImperativeHandle(refDialog,()=>{
      return{  open(){
        dialog.current.showModal();
    }};
    })

return createPortal(
    <dialog ref={dialog} onClose={handleReset()} className="result-modal" >
     {userLost && <h2>You Lost</h2>} 
     {!userLost && <h2>Your Score : {score}</h2>}  
    <p>the target time was <strong>{targetTime}</strong></p>
    <p>you stop the timer with <strong>{formattedRemainingTime} seconds left</strong> </p>
    <form method="dialog" onSubmit={handleReset()}>
        <button>close</button>
    </form>
    </dialog>,
    document.getElementById('modal')
);
}