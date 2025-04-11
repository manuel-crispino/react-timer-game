import { useState } from "react";

export default function Player() {
  const [input,setInput]= useState({
    name: "",
    isSubmitted:false
  });

 function  handleInput(e){

  const newName = e.target.value;
  setInput(prev => ({
    ...prev,
    name: newName,
  }));
  
  if( newName === ""){
    setInput(prev => ({
      ...prev,
      isSubmitted:false}));
    };

  }; 
 
  function handleClick(){
    if ( input.name !== ""){
   setInput(prev => ({
    ...prev,
    isSubmitted:true}));}
  };

  return (
    <section id="player">
      <h2>Welcome  {input.isSubmitted ? input.name : "unknown entity" }</h2>
      <p>
        <input type="text" onChange={handleInput} value={input.name} />
        <button onClick={handleClick}>Set Name</button >
      </p>
    </section>
  );
}
