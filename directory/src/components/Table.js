import Row from "./Row";
//need to build a table and populate it with the data in Row.
import React, { Component } from 'react'
import '../App.css';

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         employees: [
            {
                "id": 1,
                "name": "Jack Torrence",
                "occupation": "writer/marketing",
                "email": "allwork.noplay@dullboy.com"
            },
            {
                "id": 2,
                "name": "Tommy Callahan",
                "occupation": "sales",
                "email": "fatguy@littlecoat.com"
            },
            {
                "id": 3,
                "name": "Will Hunting",
                "occupation": "janitor",
                "email": "wickedsmart@apples.com"
            },
            {
                "id": 4,
                "name": "Joe Dirt",
                "occupation": "janitor",
                "email": "joe@fireworksfan.com"
            },
            {
                "id": 5,
                "name": "Ellen Ripley",
                "occupation": "mechanical",
                "email": "mechfan@weyland-utani.com"
              },
            {
                "id": 6,
                "name": "Willy Loman",
                "occupation": "sales",
                "email": "tired@fadedflute.com"
              },
              {
                "id": 7,
                "name": "Ann Perkins",
                "occupation": "medical",
                "email": "sweetann@pawnee.gov"
              },
              {
                "id": 8,
                "name": "Paul Sheldon",
                "occupation": "writer/marketing",
                "email": "paul@miserybooks.com"
              },
              {
                "id": 9,
                "name": "Charlotte Pickles",
                "occupation": "sales",
                "email": "angelicasmom@reptarmail.com"
              },
              {
                "id": 10,
                "name": "Don Draper",
                "occupation": "sales",
                "email": "flawedandruined@cocacola.com"
            }
        ]
      }
   }

   renderTableData() {
    return this.state.employees.map((employee, index) => {
       const { id, name, occupation, email } = employee //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{occupation}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }
 renderTableHeader() {
    let header = Object.keys(this.state.employees[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 render() {
    return (
       <div>
          <h1 id='title'>Employee Directory</h1>
          <table id='employees'>
             <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}

export default Table //exporting a component make it reusable and this is the beauty of react