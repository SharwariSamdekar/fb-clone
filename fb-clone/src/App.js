import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    // BEM naming convention
    // Wrpping everything using react context API. Could also use REDUX
    <div className="app">
      { !user ? (
      <Login />
      ) : (
        <>
        <Header />
      
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      </>
      )};
      

      


    </div>
  );
}

export default App;
