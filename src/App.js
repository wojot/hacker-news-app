import React from "react";
import StoriesList from "./components/StoriesList";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <StoriesList />
      </div>
    </>
  );
}

export default App;
