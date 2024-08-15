import React, { useState } from "react";

const Leaders = () => {
  const [on, setOn] = useState(false);
  const showLeaders = () => {
    setOn(!on);
  };
  const usersArray = Object.keys(localStorage)
    .map((key) => ({
      key: key,
      value: Number(localStorage.getItem(key)),
    }))
    .filter((entry) => entry.value !== 0);

  usersArray.sort((a, b) => a.value - b.value);

  const lowestThree = usersArray.slice(0, 3);

  return (
    <>
      <button onClick={showLeaders}>Show leaders</button>
      {on && (
        <div className="leaders winner">
          <h2>Leaders</h2>
          <ol>
            {lowestThree.map((user, index) => {
              return <li key={index}>{`${user.key}:  ${user.value}`}</li>;
            })}
          </ol>
        </div>
      )}
    </>
  );
};

export default Leaders;
