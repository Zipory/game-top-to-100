
export let havePlayer = false;
export let allUsers = [];
/**----------------create new users--------------------- */
function NewUser(props) {

   /**-------add to lacal storage------- */
    const addPlayer = ({target})=>{
        let user = {
            name: target.previousElementSibling.value,
            startNumber : Math.floor(Math.random() *99),
            scores: "0",
            steps: 0,
        };
        havePlayer = true;
        props.force();
        allUsers.push(user);
        target.setAttribute("disabled", "true");
        target.previousElementSibling.setAttribute("disabled", "true");
        localStorage.setItem(user.name, user.scores);
    }
  return (
    <div className="usersInput">
      <input
        type="text"
        minLength={3}
        placeholder="user name"
        pattern="[a-zA-Z]"
        required
      />
      <button onClick={(event => addPlayer(event))} >set</button>
    </div>
  );
}
document.querySelector("div")
export default NewUser;