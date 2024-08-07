import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RockPaperScissors from './chapter2/RockPaperScissors';
import MainPage from './chapter2/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/RockPaperScissors" element={<RockPaperScissors />} />
    </Routes>
    </BrowserRouter>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
