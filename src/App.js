import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './component/headers/Header'
import MainPages from './component/mainpages/Pages'
import './App.css'

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
       
          <Header />
          
          <MainPages />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;


// import React from 'react';
// import Header from 'Header'
// function App()
// {
//   <div>
//        <h1>Heading</h1>

//       <Header/>
//   </div>
 

  
// }
// export default App