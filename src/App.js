import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import APOD from './components/APOD.js';
import {API_KEY, BASE_URL } from './constants/index.js';
import InfoData from './components/InfoData'
import Header from './components/Header'

function App() {

  const [apiData, setApiData] = useState([])
   useEffect(() => {
      const fetchApodData = () => {
          axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
          .then(res =>{
            setApiData(res.data)
          })
          .catch( err => {
            console.log('error',err)
          })
      } 
      fetchApodData()
    }, [])


  
  return (
    <div className="App">
      <Header title={apiData.title} date={apiData.date}/>
      <APOD url={apiData.url}/>
      <InfoData info={apiData.explanation}/>
    
    </div>
  );
}

export default App;
