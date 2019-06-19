import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../logo.svg';
import '../../App.css';

function Mydiv(props) {
  return( <div className="franchiseSections hideme" id={props.id}>
            <div className="franchiseSectionItem" id={props.innerid}> {props.name} </div>
          </div> ); 
}

function Franchise() {
  return (
    <div>
      <div class="franchisePageHeader parallax">LET'S MAKE SOME DOUGH</div>
      <div class="franchiseMessage"><b>Join The Pavarazzi Family</b></div>
      <div class="franchiseMainLayout">
        <Mydiv innerid="innerSection1" id="section1" name="We are a successful, affordable easy operation. Pavarazzi Gourmet Pizza is an industry innovator and offers national brand recognition.  "/>
        <Mydiv id="section2" innerid="innerSection2" name=""/>
        <Mydiv id="section3" innerid="innerSection3"/>
        <Mydiv id="section4" innerid="innerSection4" name=" Our menu is based on fresh thinking, fundamental business practices and innovative food ideas. Our menu showcases gourmet pizza, delicious pasta and specialty panzerottis. We also have appetizers, salads, desserts satisfying a growing consumer demand for carry out and delivery foods."/>
        <Mydiv id="section5" innerid="innerSection5" name="We are a growing Ottawa legend that has established tremendously loyal clientele. This clientele is looking for the same product in other areas of Ottawa."/>
        <Mydiv id="section6" innerid="innerSection6"/>
        <Mydiv id="section7" innerid="innerSection7"/>
        <Mydiv id="section8" innerid="innerSection8" name="Now that the concept is well proven, Pavarazzi Gourmet Pizza is ready for controlled expansion in select new Ottawa markets. With business training and consultation provided, its easy to be your own boss."/>
      </div>
      <div class="franchiseBottomMessage"><p><b>For Further Information on Licensing Opportunities Please Contact Our Head Office at:</b></p>
        613.786.9996 Ex.4 <br/>
        E-mail info@pavarazzigourmet.ca <br/>
        515-900 Greenbank Rd <br/>
        Ottawa, ON K2J 4P6 <br/>
      </div>
    </div>
  );
}
export default Franchise;
