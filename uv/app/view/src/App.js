import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import Home from './components/Home';
import Insert from './components/Insert';
import View from './components/View';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faHome, faUpload, faEye } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [storageData, setStorageData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    axios.get('http://localhost/uv/app/controller/backend.php').then(response => {
      setStorageData(response.data)
    }).catch(function (error) {
      console.log(error);
    })
  }, [isClicked])

  return (
    <Router>
      <div className='container'>
        <nav className='navbar navbar-inverse navbar-expand-lg navbar-dark bg-primary'>
          <Link to={'/'} className="navbar-brand mb-2"><FontAwesomeIcon icon={faLaptop} /> Storage Management System of Új Világ</Link>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to={'/'} className='nav-link'><FontAwesomeIcon icon={faHome} /> Home</Link>
              </li>
              <li className='nav-item'>
                <Link to={'/insert'} className='nav-link'><FontAwesomeIcon icon={faUpload} /> Insert</Link>
              </li>
              <li className='nav-item'>
                <Link to={'/view'} className='nav-link'><FontAwesomeIcon icon={faEye} /> View</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Insert' element={<Insert storageData={storageData} />} />
          <Route path='/View' element={<View storageData={storageData} setStorageData = {setStorageData} isClicked={isClicked} setIsClicked={setIsClicked} />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
