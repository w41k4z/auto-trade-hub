import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import reportWebVitals from '../reportWebVitals';
import Nav from '../Header/Nav';
import Banner from '../Header/Banner';
import Search from '../Header/Search';
import AnnouncementInfo from './AnnouncementInfo';


const AnnouncementInfoPage =() => {
  return(
    <><Banner/>
    <Nav/>
    <AnnouncementInfo/></>
  );

}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default AnnouncementInfoPage;
