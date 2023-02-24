import React, { useEffect } from 'react';
import axios from 'axios';
 
//import React, { useState, useEffect } from 'react';

function App() {
       useEffect(() => {
        axios.get('http://54.87.120.117:3005/')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
               //       .catch(error=>{
//      console.log(error);})
       });
  return (
    <div className="App">
	<h1>APP Working</h1>
    </div>
  );
}

export default App;
