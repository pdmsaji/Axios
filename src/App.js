//import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import { useState } from 'react'; // defined to incorporate data from the server



function App() {
 
   const [state,setState] = useState([]); 


  return (
    <div className="App">

      <h1> APIs....Demo Module </h1>
      <p>This is a test of git new branch</p>

      <button onClick={
        ()=>{
          axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (res)=>{
              console.log(res.data);
              setState(res.data);
            }

          )

        }

      }>

        Click here to load
      
      </button>

      {state.map(
        (obj,index)=>{

          return(
            <div>

              <h1> {index+1} </h1>
              <h4>{obj.title}</h4>
            </div>




          )
        }
      )
      
      
      }

    </div>
  );
}

export default App;
