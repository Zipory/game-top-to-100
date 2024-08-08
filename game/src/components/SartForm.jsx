import { useState } from "react"
import { useReducer } from "react";
import NewUser, {havePlayer} from "./NewUser"
let counter = 0;
/**-----------------------create the form----------------------------- */
function StartForm(props) {
    let userData = {
        force: force,
    }
    const [players, setPlayers] = useState([<NewUser {...userData} key={counter++}/>]);
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    const start = props.start;

function morePlayer() {
    setPlayers( prev => [...prev, <NewUser {...userData} key={counter++}/>] );
    console.log(havePlayer);
}

/**------------abled the start play button------------------------------ */
function force() {
    forceUpdate();
}

/**----------switch the page to the gaem page--------------------- */
function startPlay() {
    start();
}

    return ( 
        <div>
        <button onClick={()=>morePlayer()}>more player</button>
        {players}
        <button onClick={startPlay} disabled={!havePlayer}>start play</button>
        </div>
    )
}

export default StartForm;