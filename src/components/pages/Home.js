import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from '../../logo.svg';
import '../../App.css';


function LandingHeader(props){
  return (
    <div class="LandingHeader">
      <div class="intro">
        {props.name}<br/><a>{props.contactInfo}</a>
      </div>
      <a href="#about"><div class="arrow" id="arr">&#10170;</div></a>
    </div>
  );
}

function LandingSecondSection(props){
  return(
    <div  id="LandingSecondSection">
          <div>{props.line1}</div>
          <div>{props.line2}</div>
    </div>
  ); 
}

function NotificationSection(props){
  return(
    <div  id="NotificationSection">
          {props.line1}<br/><br/><a>{props.line2}</a>
    </div>
  ); 
}

function LandingInfoSection(props){
  return(
    <div  className="LandingInfoSection">
          <div className="LandingInfoSectionLines" id="line1id">{props.line1}</div>
          <div className="LandingInfoSectionLines"  id="line2id">{props.line2}</div>
          <div className="LandingInfoSectionLines"  id="line3id">{props.line2}</div>
          <div className="LandingInfoSectionLines"  id="line4id">{props.line2}</div>
    </div>
  ); 
}

function Home() {
  return (
    <div>
      <LandingHeader name="PAVARAZZI" contactInfo="Pizza &#8226; Pasta &#8226; Panzerotti &#8226; Poutine" />
      <div class="about hideme" id="about">
        <p><b>About Us</b></p>
        We are a small Centretown pizzeria serving gourmet pizza, panzerottis and so much more at good prices. Pavarazzi has been open since 19XX and we were voted best pizzeria in ottawa by the Ottawa sun from 2001 to 2005. We have a strong loyal local clintele and we welcome everyone to come try our delicious food.     
      </div>
      
      <div id="main1" class="landingMainLayout centerMessage parallax">
        <p class="hideme"><b>CHECK OUT OUR MENU</b></p>
        <div class="hideme">Get 10% off our star of the month pizza</div>
        <Link to="/Menu">
          <div class="button landingBtn" id="button-6">
            <div id="spin"></div>
            <a class="hideme" href="#">MENU</a>
          </div>
        </Link>
      </div>   
      
      <NotificationSection line1="Delivery from Rideau River To Island Park" line2="Buon Apetito!"/>
    </div>
  );
}

export default Home;
