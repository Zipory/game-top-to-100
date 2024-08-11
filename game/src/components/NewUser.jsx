export let havePlayer = false;
export let allUsers = [];
export const setHavePlayer = () => (havePlayer = false); // this function used to starting a new game
export const setAllUsers = () => (allUsers = []); // this function used to starting a new game
/**----------------create new users--------------------- */
function NewUser(props) {
  /**-------add to local storage------- */
  const addPlayer = ({ target }) => {
    if (target.previousElementSibling.value.length < 2 ) {return}
    let user = {
      name: target.previousElementSibling.value,
      startNumber: Math.floor(Math.random() * 99),
      // scores: "0",
      steps: 0,
      topSteps: 0,
      arrOfThreeSteps : [],
    };
    havePlayer = true;
    props.force();
    allUsers.push(user);
    target.setAttribute("disabled", "true");
    target.previousElementSibling.setAttribute("disabled", "true");
    if (localStorage.getItem(user.name)) {
      //check if there is a user name like this
      //its update the user topsteps to the stored data
      const localUser = JSON.parse(localStorage.getItem(user.name));
      user.topSteps = localUser;
      localStorage.setItem(user.name, JSON.stringify(user.topSteps));
    } else {
      //if there is none, its create & stored the new user
      localStorage.setItem(user.name, user.topSteps);
    }
  };
  return (
    <div className="usersInput">
      <input
        type="text"
        minLength={3}
        placeholder="user name"
        pattern="[a-zA-Z]"
        required
      />
      <button onClick={(event) => addPlayer(event)}>set</button>
    </div>
  );
}
document.querySelector("div");
export default NewUser;
