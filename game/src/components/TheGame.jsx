import { allUsers, havePlayer, setAllUsers, setHavePlayer } from "./NewUser";
import { useState, useReducer } from "react";
import "./style.css";
/**------------------create the game page------------------------ */
function TheGame(props) {
  const end = props.end;
  const [turn, setTurn] = useState(0);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [winner, setWinner] = useState(null);
  function nextTurn() {
    setTurn((prev) => (prev + 1) % allUsers.length);
    if (allUsers.length === 1) forceUpdate();
  }

  function checkwinner(user) {
    user.steps++;
    if (user.startNumber === 100) announceTheWinner(user);
  }
  function announceTheWinner(user) {
    setTurn(() => allUsers.length);
    setWinner(user.name);

   /**----------trying to creat an Array of scores.------ */ <TODO></TODO>
    // user.arrOfThreeSteps.push(user.steps);
    // let theArr = JSON.stringify(user.arrOfThreeSteps);
    // localStorage.setItem((user.name)+1, theArr);
    // console.log(user.arrOfThreeSteps);
/**----------------------------------------------------- */

     // its check if current steps are lower from the topsteps,
    //or if the user does not have topsteps at all(which means that is a new user)
    //if is true so the stored data updated
    if (user.steps < user.topSteps || user.topSteps === 0) {
      console.log(user.steps, user.topSteps);
      user.topSteps = user.steps;
      const topSteps = JSON.stringify(user.steps);
      localStorage.setItem(user.name, topSteps);
    }
  }

  function replay() {
    setAllUsers(); //set the all users to empthy array
    setHavePlayer(); // set the have player to false

    end(); // set the starting var "tostart" to be "!tostart" which give the starting page
  }

  /**------------Reset those players-------------- */
  function replay2() {
    allUsers.map( (user) => {return (user.steps = 0, user.startNumber =  Math.floor(Math.random() * 99))});
    console.log(allUsers);
    setTurn(0);
  }

  return (
    <div>
      <h2>GET TO 100</h2>
      <main className="users">
        {allUsers.map((user, index) => {
          return (
            <section className="each-user" key={index}>
              <div className="index">{index + 1}</div> <br />
              {user.name} <br /> steps: {user.steps} <br /> best:{" "}
              {user.topSteps}
              <br />
              score: {user.startNumber} <br />
              <button
                onClick={() => {
                  nextTurn();
                  user.startNumber++;
                  checkwinner(user);
                }}
                disabled={index !== turn}>
                +1
              </button>
              <button
                onClick={() => {
                  nextTurn();
                  user.startNumber--;
                  checkwinner(user);
                }}
                disabled={index !== turn}>
                -1
              </button>
              <button
                onClick={() => {
                  nextTurn();
                  user.startNumber *= 2;
                  checkwinner(user);
                }}
                disabled={index !== turn}>
                *2
              </button>
              <button
                onClick={() => {
                  nextTurn();
                  user.startNumber = Math.floor(user.startNumber / 2);
                  checkwinner(user);
                }}
                disabled={index !== turn}>
                /2
              </button>
              {/* <Buttons userNumber={index}/> */}
            </section>
          );
        })}
        {turn === allUsers.length && (
          <footer>
            <h1 className="winner">
              The winner is:
              <br />
              {winner}
            </h1>
            <button onClick={replay}>Go back</button>
            <button onClick={replay2}>Replay that game</button>
          </footer>
        )}
      </main>
    </div>
  );
}
export default TheGame;

// document.body
