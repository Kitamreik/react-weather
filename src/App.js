import React, {useState} from "react";
// import components to render
import { UserMap } from "./components/shared/InputField";

function App() {
  // start TO create a variable that is an array of objects
  const userInfo = [
    {
      key: "000",
      englishName: "Test State",
      primaryPostalCode: "Zip Code",
      country: {
        ID: "Abbreviation of Country",
        countryName: "Name of Country",
      },
      administrativeArea: {
        ID: "Abbreviation of State/County/Area",
        englishName: "Name of State/County/Area",
        englishType: "State/County/Area",
      },
    },
    {
      key: "001",
      englishName: "Denver",
      primaryPostalCode: "80247",
      country: {
        ID: "US",
        englishName: "United States",
      },
      administrativeArea: {
        ID: "CO",
        englishName: "Colorado",
        englishType: "State",
      },
    },
  ];
  // end

  // creating state and the setter function- This state will keep the value of the user input via input field. The value will represent a username. 
  // Syntax: const [current state, state to change] = useState(initial value)
  const [userName, setUserName] = useState("");

  // create the handler function
  const handleUserNameChange = (e) => {
    console.group("Log the Changes from the User Name");
      console.log(e.target.value); 
    console.groupEnd("ALL DONE")
    console.log("Setting State from the UserName")
    // set the state that will hold the user name to the value entered into the field
    setUserName(e.target.value);
    console.warn(setUserName(e.target.value));
    console.groupEnd("END")
  }
  // end 
  return (
    <div className="App">
     <h1>Kit's Cosmically Delicious Weather APP</h1>
      <label htmlFor='user-name'>User Name: </label>
        <input id='user-name' name='user-name' type='text' onChange={handleUserNameChange} />

      <hr />
      {/* component instantiation */}
      <UserMap userInfo={userInfo} />
    </div>
  );
}

// have the mapping component MOVED to the components folder structure

// end

export default App;

// Boilerplate code
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/ 