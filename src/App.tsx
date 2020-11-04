import React, { useState } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Login from "./Login";
import PhishingGraph from "./PhishingGraph";

function App() {
  const [authToken, setAuthToken] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Login setAuthToken={setAuthToken} path="/" />
          <PhishingGraph path="/graph" auth_token={authToken} />
        </Router>
      </header>
    </div>
  );
}

export default App;
