import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {disableReactDevTools} from "@fvilers/disable-react-devtools"
import './index.css';
import App from './App';

disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path="/*" />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

