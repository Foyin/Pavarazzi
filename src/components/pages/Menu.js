import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../logo.svg';
import '../../App.css';

function MenuMessage(props) {
  return  ( <div className="menuMessage">
              <p>{props.line1}</p>
              <b>{props.line2}</b> <br/>
              <a>{props.line3}</a>
            </div>
             );
}

function Nav(props) {
  return  ( <a href={props.target}><div className="menuItem" id={props.id}>{props.name}</div></a> );
}

function MenuHeader(props) {
  return  ( <div className="menuHeader" id={props.id}>{props.name}</div> );
}

function MenuItemDetails(props) {
  return  ( <div className="items"> 
              <b> {props.name} <br/></b> 
                <a>{props.price}<br/> <div className="toppings">{props.toppings} </div><br/><br/></a>
             </div> );
}

function MenuItemDetailsHeader(props) {
  return  ( <div className="detailsHeader items"> 
              <p><b>{props.header}</b></p>
              <b>{props.line1}<br/></b>
              <b>{props.line2}<br/></b> 
             </div> );
}

function Scroll(props) {
    return  ( <a href="#menuNav" className="up">
               &#8607;
              </a>);
}

function Menu() {
  return (
    <div>
      <Scroll />
      <div class="menuTophalf">
      <MenuMessage line1="Taste The Difference" line2="Buon Apetito!"
/>
      <section className="menuNav" id="menuNav">
        <Nav name="Pavarazzi Classics" id="pc" target="#pcHeader"/>
        <Nav name="Pavarazzi Specials" id="ps" target="#psHeader"/>
        <Nav name="Gourmet Panzerotti" id="gp" target="#gpHeader"/>
        <Nav name="Pasta" id="pasta" target="#pastaHeader"/>
        <Nav name="Sandwiches" id="sw" target="#swHeader"/>
        <Nav name="Salads" id="salad" target="#saladHeader"/>
        <Nav name="Beverages" id="beverage" target="#beverageHeader"/>
        <Nav name="Desserts" id="dessert" target="#dessertHeader"/>
        <Nav name="Side Orders" id="so" target="#soHeader"/>
        <Nav name="Custom Pizza" id="cp" target="#cpHeader"/>
      </section>

      <p class="menuMessage2">0% trans fat pizza in crust and sauces</p>

      </div>
      <section className="menuList">
        <MenuHeader name="Pavarazzi Classics" id="pcHeader"/>
        <MenuItemDetailsHeader line1="4 slices    &#8212;    8 slices    &#8212;    10 slices    &#8212;   12 slices    &#8212;   24 slices" line2="Small  &#8212; Medium  &#8212;  Large  &#8212;  Family  &#8212;  Party size   (6 to 10 people)" header="All pizzas are served on white or heavenly hero crust. Choose from regular or thin crust"/>
        <div className="list1">
          <MenuItemDetails name="Primo Pepperoni" price="$10.15 &#8226; $16.13 &#8226; $21.33 &#8226; $25.85 &#8226; $34.27" toppings="Pepperoni and cheese"/>
          <MenuItemDetails name="Classic Combo" price="$12.97 &#8226; $19.07 &#8226; $24.72 &#8226; $29.69 &#8226; $43.48" toppings="Pepperoni, sweet peppers, mushrooms, olives"/>
          <MenuItemDetails name="Spicy Sausage" price="$13.54 &#8226; $20.20 &#8226; $25.74 &#8226; $30.16 &#8226; $43.48" toppings="Italian spicy sausage, roasted sweet peppers, onions"/>
          <MenuItemDetails name="Hawaiian" price="$12.41 &#8226; $17.94 &#8226; $22.46 &#8226; $28.45 &#8226; $38.85" toppings="Ham, pineapple"/>
          <MenuItemDetails name="Vegetarian" price="$13.76 &#8226; $20.65 &#8226; $25.97 &#8226; $31.95 &#8226; $46.88" toppings="Artichoke hearts, olives, roasted peppers, tomatoes, sesame seeds"/>
          <MenuItemDetails name="Meat Eaters Winner 2003" price="$13.76 &#8226; $20.65 &#8226; $26.30 &#8226; $32.63 &#8226; $ 48.00" toppings="Meat sauce, pepperoni, italian sausage"/>
          <MenuItemDetails name="Mexicano" price="$13.76 &#8226; $20.65 &#8226; $26.30 &#8226; $32.63 &#8226; $48.00" toppings="Sweet peppers, spanish onions, groundbeef, mild cheddar"/>
            </div>
        
        <MenuHeader name="Pavarazzi Specials" id="psHeader"/>
        <MenuItemDetailsHeader header="Our Heavenly hero crust is low in salt, seasoned with frech herbs and spice" line1="4 slices    &#8212;    8 slices    &#8212;    10 slices    &#8212;   12 slices    &#8212;   24 slices" line2="Small  &#8212;  Medium  &#8212;  Large  &#8212;  Family  &#8212;  Party size   (6 to 10 people)"/>
        <div className="list1">
          <MenuItemDetails name="Love of Cheese" price="$14.10 &#8226; $22.46 &#8226; $26.88 &#8226; $33.08 &#8226; $48.00" toppings="Basil pesto, four cheeses, tomatoes, red onions"/>
          <MenuItemDetails name="Authentic Spicy Pepperoni" price="$11.50 &#8226; $18.28 &#8226; $22.46 &#8226; $26.30 &#8226; $36.59" toppings="Authentic spicy pepperoni and cheese"/>
          <MenuItemDetails name="Cleopatra" price="$14.89 &#8226; $23.59 &#8226; $27.43 &#8226; $33.76 &#8226; $47.89" toppings="Smoked salmon, capers, red onions"/>
          <MenuItemDetails name="Baked Chicken Italiano" price="$14.10 &#8226; $22.46 &#8226; $26.30 &#8226; $32.63 &#8226; $47.44" toppings="Breast of chicken, tomatoes, buttered garlic"/>
          <MenuItemDetails name="The Greek" price="$14.55 &#8226; $22.46 &#8226; $26.98 &#8226; $33.51 &#8226; $48.00" toppings="Calamata olives, sun-dried tomatoes, feta cheese, red onions"/>
          <MenuItemDetails name="Fruit of the Sea" price="$14.89 &#8226; $24.04 &#8226; $30.82 &#8226; $36.02 &#8226; $49.13" toppings="Shrimps, scallops, artichokes, garlic"/>
          <MenuItemDetails name="Grilled Breast of Chicken" price="$14.55 &#8226; $22.91 &#8226; $26.30 &#8226; $34.21 &#8226; $48.00" toppings="Sun-dried tomato pesto, garlic, breast of chicken"/>
          <MenuItemDetails name="Basilica Winner 2004" price="$14.55 &#8226; $21.67 &#8226; $26.87 &#8226; $34.21 &#8226; $48.00" toppings="Fresh spinach, basil pesto, roasted red peppers, sweet red onion, feta cheese"/>
          <MenuItemDetails name="Mona Lisa" price="$14.10 &#8226; $21.78 &#8226; $26.30 &#8226; $32.63 &#8226; $48.00" toppings="Sun-dried tomatoes, spanish onions, asparagus, mild cheddar"/>
          <MenuItemDetails name="Butcher Steak" price="$13.76 &#8226; $21.78 &#8226; $26.98 &#8226; $33.31 &#8226; $48.50" toppings="Marinated steak, sweet red onions, green peppers, mushrooms, provolone cheese"/>
          <MenuItemDetails name="Pavarazzi" price="$14.55 &#8226; $21.67 &#8226; $26.87 &#8226; $34.21 &#8226; $48.00" toppings="Olive oil, chicken, feta cheese, tomatoes, black olives, oregano"/>
          <MenuItemDetails name="Pink Pizza" price="$13.76 &#8226; $20.65 &#8226; $25.97 &#8226; $31.95 &#8226; $46.88" toppings="Pink sauce (alfredo + marinara), spinach, chicken, black olives, sesame seeds"/>
          <MenuItemDetails name="Capricciosa" price="$12.41 &#8226; $17.94 &#8226; $22.46 &#8226; $28.45 &#8226; $38.85" toppings="Ham and Mushrooms"/>
          <MenuItemDetails name="Paesano Pizza" price="$13.76 &#8226; $20.65 &#8226; $25.97 &#8226; $31.95 &#8226; $ 46.88" toppings="Ham, mushrooms, bacon, feta cheese"/>
          <MenuItemDetails name="Quattro Verdures" price="$12.97 &#8226; $19.07 &#8226; $24.72 &#8226; $29.69 &#8226; $43.48" toppings="Mushrooms, white onions, tomatoes, green peppers"/>
          <MenuItemDetails name="Tuna Pizza" price="$12.97 &#8226; $19.07 &#8226; $24.72 &#8226; $29.69 &#8226; $43.48" toppings="Tuna, red onions, black olives, fresh basil"/>
          <MenuItemDetails name="Alsace Pizza" price="$13.54 &#8226; $20.20 &#8226; $25.74 &#8226; $30.16 &#8226; $43.48" toppings="Sour cream, onions, bacon , cheese"/>
        </div>
        
        <MenuHeader name="Gourmet Panzerotti" id="gpHeader"/>
        <MenuItemDetailsHeader header="Platters are served with a fresh garden or caesar salad, or regular fries (for spicy fries add $1.25)"/>
        <div className="list1">
          <MenuItemDetails name="Margherita" price="solo $6.19 &#8226; platter $9.58" toppings="Stuffed with tomato sauce & cheese."/>
          <MenuItemDetails name="Grilled Chicken" price="solo $7.89 &#8226; platter $11.28" toppings="Breast of chicken, basil pesto, garlic."/>
          <MenuItemDetails name="Vegetarian" price="solo $7.32 &#8226; platter $11.16" toppings="Roast peppers, zucchini, olives, mushrooms."/>
          <MenuItemDetails name="Calabrese" price="solo $6.76 &#8226; platter $10.15" toppings="Spicy pepperoni & cheese."/>
          <MenuItemDetails name="Hawaiian" price="solo $6.76 &#8226; platter $10.74" toppings="Ham, pineapples."/>
          <MenuItemDetails name="Classic Combo" price="solo $7.32 &#8226; platter $11.28" toppings="Pepperoni, sweet peppers, mushrooms, olives."/>
          <MenuItemDetails name="Popeye" price="solo $7.97 &#8226; platter $11.28" toppings="Fresh spinach, feta cheese, sweet red onions & basil pesto."/>
          <MenuItemDetails name="The Greek" price="solo $7.97 &#8226; platter $11.28" toppings="Calamata olives, feta cheese, sun-dried tomatoes,red onions."/>
          <MenuItemDetails name="Pepperoni" price="solo $6.76 &#8226; platter $10.15"/>
        </div>
        
        <MenuHeader name="Pasta" id="pastaHeader"/>
        <MenuItemDetailsHeader header="Choose from Penne, Fettuccine, or Spaghetti noodles"/>
        <div class="list1">
          <MenuItemDetails name="Meat Lasagna" price="$12.98" toppings="Bolognese sauce, mozzarella & brick cheese, parsley"/>
          <MenuItemDetails name="Veggie Lasagna" price="$13.54" toppings="Mixed vegetables, marinara sauce, mozzarella cheese, parmesan cheese, parsley"/>
          <MenuItemDetails name="Tuna Lasagna" price="$12.98" toppings="Tuna, black olives, red onions, fresh basil, marinara souca
  (meat)"/>
          <MenuItemDetails name="Oven Baked Lasagna" price="$13.54" toppings="Oven Baked Lasagna"/>
          <MenuItemDetails name="Bolognese" price="Bolognese (meat sauce) $ 10.71 &#8226; w/ meatballs $ 13.54"/>
          <MenuItemDetails name="Alfredo" price="Alfredo $11.28  &#8226; w/ shrimps, scallops $14.55 &#8226; w/ breast of chicken $15.23"/>
          <MenuItemDetails name="Parmigiana" price="w/pasta breaded chicken or veal  &#8226; w/ marinara pasta $16.93"/>
          <MenuItemDetails name="Sun-Dried Tomato Pesto with Feta Cheese & Onions" price="$12.49"/>
          <MenuItemDetails name="Basil Pesto" price="Basil Pesto $11.28 &#8226; w/ shrimps, scallops $15.23 &#8226; w/ breast of chicken $ 14.55"/>
          <MenuItemDetails name="Marinara" price="(tomato sauce spicy or not) $10.15 &#8226; w/ grilled breast of chicken $ 12.97 &#8226; w/ italian spicy sausage $ 12.97"/>
        </div>
        
        <MenuHeader name="Sandwiches" id="swHeader" />
        <MenuItemDetailsHeader header="All sandwiches served with a choice of white or whole wheat baguette." line2="Make your sandwich a platter for $2.25 more. Platters include your choice of regular or spicy fries or a fresh garden salad"/>
        <div className="list1">
          <MenuItemDetails name="Don Giovanni’s" price="Small $7.55 &#8226; Large $10.71" toppings="Roast beef (hot or cold)"/>
          <MenuItemDetails name="Da God Father" price="Small $6.48 &#8226; Large $9.48" toppings="Genoa salami, mortadella, capicolla ham"/>
          <MenuItemDetails name="Veggies from Heaven" price="Small $6.64 &#8226; Large $9.58" toppings="Roasted peppers, zucchini & vinaigrette dressing"/>
          <MenuItemDetails name="Pavarazzi Club" price="Small $7.32 &#8226; large $10.71" toppings="Breast of chicken, cheese, bacon"/>
          <MenuItemDetails name="Capriccosa Sandwich" price="Small $7.98 &#8226; large $10.98" toppings="Cheese, ham & grilled mushrooms"/>
          <MenuItemDetails name="Philly Steak" price="Small $7.32 &#8226; large $10.71" toppings="Green peppers, onions, steak"/>
          <MenuItemDetails name="Super Mario" price="Small $7.32 &#8226; Large $10.71" toppings="Meat sauce, meatballs, lots of cheese"/>
          <MenuItemDetails name="Veal Parmigiana" price="$11.28"/>
          <MenuItemDetails name="Chicken Parmigiana" price="$10.79"/>
        </div>
        
        <MenuHeader name="Salads" id="saladHeader"/>
        <MenuItemDetailsHeader header="All served with garlic bread" line1="With Herb Vinaigrette or Garlic Peppercorn dressing" line2="With grilled breat of chicken or sauteed shrimps and scallops (Extra -  side $3.48 &#8226; dinner $4.48)"/>
        <div className="list1">
          <MenuItemDetails name="Caesar Salad" price="side $6.64 &#8226; dinner $8.90" toppings="Crisp romaine, croutons, bacon, topped 
  with freshly grated parmesan."/>
          <MenuItemDetails name="Greek Salad" price="side $7.98 &#8226; dinner $10.15" toppings="Crisp romaine, feta cheese, calamata olives."/>
          <MenuItemDetails name="Spinach Salad" price="side $8.22 &#8226; dinner $10.48 " toppings="Crisp romaine, feta cheese, calamata olives."/>
          <MenuItemDetails name="Garden Salad" price="side $5.96 &#8226; dinner $8.22" toppings="Crisp romaine, feta cheese, calamata olives."/>
        </div>

        
        
        <MenuHeader name="Beverages" id="beverageHeader"/>
        <MenuItemDetailsHeader header="An assortment of soft drinks & juices" />
        <div className="list1">
          <MenuItemDetails name="Brio (Fruit Drink)" price="$1.98"/>
          <MenuItemDetails name="Aranciata" price="$1.98"/>
          <MenuItemDetails name="Limonata (Lemon)" price="$1.98"/>
          <MenuItemDetails name="Soft Drinks" price="$1.45"/>
          <MenuItemDetails name="Six Packs" price="$1.98"/>


        </div>
        
        <MenuHeader name="Desserts" id="dessertHeader"/>
        <div className="list1">
          <MenuItemDetails name="House Cheese Cake" price="$ 5.28"/>
          <MenuItemDetails name="Chocolate Fondant" price="$ 5.28"/>
          <MenuItemDetails name="Tiramisu" price="$ 5.28"/>
        </div>

        <MenuHeader name="Side Orders" id="soHeader"/>
        <div className="list1">
          <MenuItemDetails name="French Fries" price="Small $3.65 &#8226; Large $5.49"/>
          <MenuItemDetails name="Spicy Fries" price="Small $4.99 &#8226; Large $6.28"/>
          <MenuItemDetails name="Italian Poutine" price="Small $7.32 &#8226; Large $9.58"/>
          <MenuItemDetails name="Poutine" price="Small $6.49 &#8226; Large $8.99"/>
          <MenuItemDetails name="Dipping Sauce" toppings="Marinara, Garlic Peppercorn, Hot sauce, Herb sauce, (House Dressing) Anchovies Sauce (House Dressing) Cheddar Sauce" price="$0.98"/>
          <MenuItemDetails name="Garlic Bread" price="1/2 loaf $ 4.49 &#8226; loaf $ 5.99 w/cheese $ 5.49 &#8226; $ 6.49"/>
        </div>

        <MenuHeader name="Design your own pizza" id="cpHeader"/>
        <MenuItemDetailsHeader line1="4 slices    &#8212;    8 slices    &#8212;    10 slices    &#8212;   12 slices    &#8212;   24 slices" line2="Small $9.58 &#8212; Medium  $15.68 &#8212;  Large $19.88 &#8212;  Family  $24.04 &#8212;  Party size $34.44" header="Pestos contain peanut products"/>
        
        <MenuItemDetails name="Extra - Small $0.98   &#8226;   Medium $1.48   &#8226;   Large $1.78   &#8226;   Family $1.98   &#8226;   Party $2.58" toppings="Buttered garlic, chopped garlic, hot peppers, mushrooms, pineapple, sesame seeds, sweet peppers, tomatoes, white or red onions"/>
        <MenuItemDetails name="Extra - Small $1.48   &#8226;   Medium $1.98   &#8226;   Large $2.48   &#8226;   Family $3.48   &#8226;   Party $4.48" toppings="Bacon, capers, ground beef, capicolla ham, genoa salami, mortadella,olives (black, green or calamata), parmesan cheese, pepperoni, roasted beef, roasted peppers, spinach, zucchini"/>
        <MenuItemDetails name="Extra - Small $2.28   &#8226;   Medium $3.28   &#8226;   Large $4.48   &#8226;   Family $5.48   &#8226;   Party $6.48" toppings="Anchovies, artichoke hearts, authentic spicy pepperoni, basil pesto, breast of chicken, extra cheese, feta cheese, italian spicy sausages, meat sauce, meatballs, provolone cheese, scallops, shrimps, smoked salmon, sun-dried tomato pesto, marinated steak, asparagus, mild cheddar, sun-dried tomatoes"/>
      </section>
    </div>
  );
}

export default Menu;
