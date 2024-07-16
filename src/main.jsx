import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import App from './App.jsx'
import Hero from './components/Hero/Hero.jsx';
import Events from './components/Events/Events.jsx';
import About from './components/About/About.jsx';
import HostVolunteer from './components/HostVolunteer/HostVolunteer.jsx';
import RegisterVolunteer from './components/RegisterVolunteer/RegisterVolunteer.jsx';
import './index.css'
import "./i18n.js"

/*i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'fr',                              // Default language
  resources: {
    en: {
      global: {
        global_en,
      }
    },
    fr: {
      global: {
        global_fr,
      }
    },
  },
});*/

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Hero />} />
          <Route path="/about" component={About} />
          {/*<Route path="events" element={<Events/>} />
          {/* <Route path="contact" element={<Footer />} />*/}
        </Route>
        <Route path="events" element={<Events/>} />
        <Route path="/card1" element={<HostVolunteer/>} />
        <Route path="/card2" element={<RegisterVolunteer/>} />
      </Routes>
    </HashRouter>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Router />
      </I18nextProvider>
  </React.StrictMode>,
);
