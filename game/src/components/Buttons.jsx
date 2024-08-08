/**---------------Currently I didnt use that function---------------------------- */

import { useState } from "react";
import { allUsers } from "./NewUser";
import { useReducer } from "react";
function Buttons(props) {
    const [turn, setTurn] = useState(0);
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    console.log("userNumber", props.userNumber);
    
    function nextTurn() {
      setTurn((prev) => (prev + 1) % allUsers.length);
    }
    const arr =["+1", "-1", "*2", "/2"];
    let action = props.action;
    
    return (
        <>{arr.map((item, index) => (<button  onClick={nextTurn}  key={index}>{item}</button>))}</>
    )
}
// disabled={props.userNumber !== turn}
export default Buttons;