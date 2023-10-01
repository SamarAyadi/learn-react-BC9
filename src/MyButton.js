import { useState } from 'react'

let namePerson = "Sadok";

function MyButton() {
// console.log("render")
   
    
    const [namePerson, setNamePerson] = useState("Sadok")
    

    function buttonClicked() {
        if (namePerson == "Sadok") {
            setNamePerson("Nanen")
        } else {
            setNamePerson ("Sadok");
        }
      }
  return (
    <div>
      <button onClick={buttonClicked}>Click Me</button>
      <h1>{namePerson}</h1>
    </div>
  );
}



export default MyButton;
