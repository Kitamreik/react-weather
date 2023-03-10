import React from "react";

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

  // create the handler function
  const handleUserNameChange = (e) => {
    console.group();
    console.log(e.target.value); 
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

// have the mapping component here
function UserMap(props) {
  return (
    props.userInfo.map(list => (
      <ul>
        <li>EnglishName of the object: {list.englishName}</li>
        <li>ID of the AdministrativeArea: {list.administrativeArea.ID}</li>
        <li>ID of the Country: {list.country.ID}</li>
      </ul>
    )
    )
  )
}
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