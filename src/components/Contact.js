import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import '../App.css';

function Contact(props){
  return(
    <div id="con">
      <div class="locationInfo">
          <div><p><b>Address:</b></p>
            491 Somerset West At Lyon, Ottawa, Ontario
          </div>
          <div>
            <p><b>Hours:</b></p>
            <div class="days">Monday <a class="hours">11am - 10pm</a><br/></div>
            <div class="days">Tuesday<a class="hours">11am - 10pm</a><br/></div>
            <div class="days"> Wednesday<a class="hours">11am - 10pm</a><br/></div>
            <div class="days"> Thursday<a class="hours">11am - 10pm</a><br/></div>
            <div class="days">Friday<a class="hours">11am - 12am</a><br/></div>
            <div class="days"> Saturday<a class="hours">4pm - 10pm</a><br/></div>
            <div class="days"> Sunday<a class="hours">4pm - 10pm</a><br/></div>
          </div>
          <div>
            <p><b>Contact Us:</b></p>
            Tel : 613.233.2320<br/><br/>
            Delivery Area from Canal West to Island Park.<br/><br/>
            Comments & Questions: info@pavarazzigourmet.ca
          </div>
      </div>
      <div id="map"></div>
      <div id="credit">Site built and designed by <a href="https://foyin.github.io" target="_blank">FoyinOgb</a></div>
    </div>
  ); 
}

export default Contact;
