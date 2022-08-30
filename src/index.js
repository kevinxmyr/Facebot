import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Hello from './FIRST COMPONENT KO/Hello'
import 'tachyons'

//!--ROBOFRIENDS
//?--Parent ni Card si CardList
// import CardList from './CardList'
import App from './App'
//?--child ni CardList si Card
// import Card from './Card'
//?-- Destructured si robots na obj array dahil wala siyang default value
// import { robots } from './robots'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />

    {/* <Hello dog = {'Pancho'} /> */}
  </React.StrictMode>
);
