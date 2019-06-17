import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import Franchise from './components/pages/Franchise';
import Contact from './components/Contact';
import logo from './logo.svg';
import './App.css';

library.add(faBars);

$(document).ready(function() {
  $("#js-navbar-toggle").click(function(){
      $("#js-menu").toggleClass("active");
  });

  $("#contact").click(function(){
      $("#js-menu").toggleClass("active");
  });

  $(".landingBtn").click(function(){
      $("#js-menu").toggleClass("active");
  });

  $(".logo").click(function(){
      $("#js-menu").toggleClass("active");
  });

  $(window).on("scroll", function() {
    var scrollPosition = $(window).height() + $(window).scrollTop();
    var scrollHeight = $(document).height();
    if ($(window).scrollTop() <= 0 || (scrollHeight - scrollPosition) / scrollHeight === 0) {
        $(".up").fadeOut();
    } else {
        $(".up").fadeIn();
    }
  });

  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".hideme, .nav-links, .logo").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(700,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(700,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

class ScrollTop extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
      let mainNav = document.getElementById("js-menu");
      mainNav.classList.toggle("active");
    }
  }

  render() {
    return this.props.children;
  }
}
const ScrollToTop = withRouter(ScrollTop);

function MainNav(props) {
  return  ( <Router>
              <div className="mainNav"> 
                  <span class="navbar-toggle" id="js-navbar-toggle">
                    <FontAwesomeIcon icon={faBars} />
                  </span>
                  <Link to="/"  style={{ textDecoration: 'none' }}><a class="logo"><img src="https://pavarazzigourmet.ca/images/logo.png" width="80%" height="80%"/></a></Link>
                  <div class="main-nav" id="js-menu">
                    <Link to="/Menu" style={{ textDecoration: 'none' }}> <a className="options nav-links"> MENU </a></Link> 
                    <a href="#con" className="options nav-links" id="contact">CONTACT</a>
                    <Link  style={{ textDecoration: 'none' }} to="/Franchise"><a className="options nav-links">  FRANCHISE </a></Link>
                  </div>
              </div>
              <ScrollToTop>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Menu" component={Menu} />
                <Route path="/Franchise" component={Franchise} />
              </Switch>
              </ScrollToTop>
              <Contact/>
            </Router> );
}

export default MainNav;