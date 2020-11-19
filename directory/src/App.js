// import logo from './logo.svg';
import './App.css';
import React from "react";
import Table from "./components/Table";
import employees from "../src/employees.json";
// import SearchBar from "./components/SearchBar";
import Row from "./components/Row";

class App extends React.Component {
  render(){
    return (
      <>
        {/* <SearchBar /> */}
        <Table />
      </>
    )
  }
}

export default App;
