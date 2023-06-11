import { useEffect, useState } from "react";

import "./App.css";

function App() {
  // *********************** //
  // ** SET UP USER DATA ** //
  // *********************** //
  const storedUserData = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : {
        userName: "User",
        resources: [],
      };

  const [userData, setUserData] = useState(storedUserData);

  function setLocalStorage() {
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  useEffect(() => {
    setLocalStorage();
  }, []);

  // *********************** //
  // ***** UPDATE ALL ***** //
  // *********************** //
  function updateAll() {
    setUserData({ ...userData });
    localStorage.setItem("userData", JSON.stringify({ ...userData }));
    console.log(userData);
  }

  // window.navigator.vibrate(50) - make phone vibrate when clicked

  // Name Input
  const [nameInput, setNameInput] = useState("");
  function handleChange(e) {
    setNameInput(e.target.value);
  }
  function updateNameButtonClicked(e) {
    e.preventDefault();
    setNameInput(nameInput);
    console.log(nameInput);
    userData.userName = nameInput;
    setNameInput("");
    updateAll();
  }

  // Resource Input
  const [resourceInput, setResourceInput] = useState("");
  function handleResource(e) {
    setResourceInput(e.target.value);
  }
  function addResourceButtonClicked(e) {
    e.preventDefault();
    setResourceInput(resourceInput);
    console.log(resourceInput);
    userData.resources.push(resourceInput);
    setResourceInput("");
    updateAll();
  }

  return (
    <div className="App">
      <h1>{userData.userName}</h1>
      <h2>My Workout Routine:</h2>
      <h2>{userData.resources.length}</h2>
      {userData.resources.length !== 0 &&
        userData.resources.map((single) => {
          return <p>{single}</p>;
        })}
      {/* Name Form */}
      <form onSubmit={(e) => updateNameButtonClicked(e)}>
        <input
          onChange={(e) => handleChange(e)}
          placeholder="Enter name..."
          type="text"
          value={nameInput}
        />
        <button type="submit">Update</button>
      </form>
      {/* Add Resource Form */}
      <form onSubmit={(e) => addResourceButtonClicked(e)}>
        <input
          onChange={(e) => handleResource(e)}
          placeholder="Enter resource..."
          type="text"
          value={resourceInput}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default App;
