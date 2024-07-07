import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Hero from './components/Hero/Hero.jsx';
import Events from './components/Events/Events.jsx';
import HostVolunteer from './components/HostVolunteer/HostVolunteer.jsx';
import RegisterVolunteer from './components/RegisterVolunteer/RegisterVolunteer.jsx';
import './index.css'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Hero />} />
          {/*<Route path="events" element={<Events/>} />
          {/* <Route path="contact" element={<Footer />} />*/}
        </Route>
        <Route path="events" element={<Events/>} />
        <Route path="/card1" element={<HostVolunteer/>} />
        <Route path="/card2" element={<RegisterVolunteer/>} />
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
