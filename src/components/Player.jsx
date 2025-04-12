import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [name,setName]= useState(null);


  function handleClick(){
    const newName = playerName.current.value; 
   const capitalize = newName.charAt(0).toUpperCase() + newName.slice(1).toLowerCase()
    setName(capitalize);
    playerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome  {name || "unknown entity"}</h2> 
      {/* || funziona come ternario ? : in questo caso meglio di ?? */}
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button >
      </p>
    </section>
  );
};
