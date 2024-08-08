import { allUsers } from "./NewUser";
import { useState, useReducer } from "react";
import Buttons from "./Buttons";
import "./style.css";
/**------------------create the game page------------------------ */
function TheGame() {
  const [turn, setTurn] = useState(0);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [winner, setWinner] = useState(null);
  function nextTurn() {
    setTurn((prev) => (prev + 1) % allUsers.length);
    if (allUsers.length ===1) forceUpdate();
  }


  function checkwinner(user) {
    user.steps++;
   if( user.startNumber === 100 ) announceTheWinner(user) ; 
  }
function announceTheWinner(user) {
    setTurn(()=> allUsers.length);
    setWinner(user.name);
    // localStorage.setItem(user.name, )  //  TODO!!
  }

  function replay() {
    
  }
  return (
    <div>
      <h2>GET TO 100</h2>
      <main className="users">
        {allUsers.map((user, index) => {
          return (
            <section className="each-user" key={index}>
              <div className="index">{index + 1}</div> <br />
              {user.name} <br/> steps: {user.steps} <br /> best: {user.scores} <br />
              score: {user.startNumber} <br />
              <button
                onClick={() => {
                  nextTurn();
                  user.startNumber++;
                  checkwinner(user);
                }}
                disabled={index !== turn}
              >
                +1
              </button>
              <button
                onClick={() => {
                  nextTurn();
                  user.startNumber--;
                  checkwinner(user);
                }}
                disabled={index !== turn}
              >
                -1
              </button>
              <button
                onClick={() => {
                  nextTurn();
                  user.startNumber *= 2;
                  checkwinner(user);
                }}
                disabled={index !== turn}
              >
                *2
              </button>
              <button
                onClick={() => {
                  nextTurn();
                  user.startNumber = Math.floor(user.startNumber / 2);
                  checkwinner(user);
                }}
                disabled={index !== turn}
              >
                /2
              </button>
              {/* <Buttons userNumber={index}/> */}
            </section>
          );
        })}
        {(turn === allUsers.length) && <footer><h1>the winner is:<br/>{winner} </h1><button onClick={replay}>play again</button></footer>}
      </main>
    </div>
  );
}
export default TheGame;

// document.body
