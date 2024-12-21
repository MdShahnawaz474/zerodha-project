import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import './App.css'
import Summary from './components/Summary';
import Orders from './components/Orders';
import Holdings from './components/Holdings';
import Positions from './components/Positions';
import Funds from './components/Funds';
import { Apps } from '@mui/icons-material';
import TopBar from './components/TopBar';
import { GeneralContextProvider } from './components/GeneralContext';
import WatchList from './components/WatchList';
// import Dashboard from './components/Dashboard';

function App() {
  

  return (
    <div>
    <TopBar/>
        
    <div className="dashboard-container">
          <GeneralContextProvider>
            <WatchList/>
          </GeneralContextProvider>
          <div className="content">
            
            <Routes>
              <Route exact path="/" element={<Summary />} />
              <Route path="/orders" element={<Orders/>} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/funds" element={<Funds />} />
              <Route path="/apps" element={<Apps />} />
            </Routes>
          </div>
        </div>
        </div>
  )
}

export default App
