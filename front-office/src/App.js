import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux'

import Login from './Login/Login';
import Signin from './Login/Signin';
import AnnouncementPage from './Announcement/AnnouncementPage';
import AddAnnouncementPage from './Announcement/AddAnnouncementPage';
import AnnouncementInfoPage from './Announcement/AnnouncementInfoPage';
import NotificationPage from './Notification/NotificationPage';
import ParameterPage from './Parameter.js/ParameterPage';

import store from "./redux/store"


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/announcement" element={<AnnouncementPage/>} />
          <Route path="/addannouncement" element={<AddAnnouncementPage/>} />
          <Route path="/infoannouncement/:id" element={<AnnouncementInfoPage/>} />
          <Route path="/notification" element={<NotificationPage/>} />
          <Route path="/parameters" element={<ParameterPage/>} />


          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
