import { useEffect, useState } from "react";

import "./App.css";

// Import Components
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

// React Router Dom
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import RoutinePage from "./pages/Routine/RoutinePage";
import CalendarPage from "./pages/Calendar/CalendarPage";
import SettingsPage from "./pages/Settings/SettingsPage";

function App() {
  // *********************** //
  // ** DATE ** //
  // *********************** //
  console.log(new Date());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // *********************** //
  // ** SET UP USER DATA ** //
  // *********************** //
  const storedUserData = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : {
        userName: "User",
        resources: [],
        rewards: [
          { coins: 10 },
          {
            memePics: [
              {
                id: 1,
                image: "image.png",
                isUnlocked: false,
              },
            ],
          },
        ],
        techniques: [
          {
            id: 1,
            title: "Bench Press",
            sets: 3,
            reps: 10,
            record: 50,
            dos: [],
            donts: [],
            notes: "These are some notes for the benchpress.",
            img: "https://hips.hearstapps.com/hmg-prod/images/hdm119918mh16114-1542293707.png?crop=0.668xw:1.00xh;0.149xw,0&resize=1200:*",
            videoEmbed: "embedshortcode",
            isDeleted: false,
          },
          {
            id: 2,
            title: "Dead Lift",
            sets: 3,
            reps: 10,
            record: 50,
            dos: [],
            donts: [],
            notes: "These are some notes for the benchpress.",
            img: "https://hips.hearstapps.com/hmg-prod/images/hdm119918mh16114-1542293707.png?crop=0.668xw:1.00xh;0.149xw,0&resize=1200:*",
            videoEmbed: "embedshortcode",
            isDeleted: false,
          },
        ],
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

  // *********************** //
  // * TOGGLE MOBILE MENU * //
  // *********************** //
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  function toggleMobileMenu() {
    console.log("Mobile menu toggled");
    setMobileMenuActive(!mobileMenuActive);
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
      <div
        className={`container ${mobileMenuActive ? "mobile-menu--active" : ""}`}
      >
        <Navigation toggleMobileMenu={() => toggleMobileMenu()} />

        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage authed={true} />} />
            <Route path="/routine" element={<RoutinePage authed={true} />} />
            <Route path="/calendar" element={<CalendarPage authed={true} />} />
            <Route path="/settings" element={<SettingsPage authed={true} />} />
          </Routes>

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
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
