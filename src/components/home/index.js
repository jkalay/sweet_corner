import React from "react";
import "./home.scss";
import Cupcakes from "../../assets/images/cupcakes.png";
import DotsBox from "../../assets/images/dots-box2.png";

export default props => {
  return (
    <div>
      <main className="main">
        <h2>We cherish the sweet moments...</h2>
        <p>Sweet Corner's story began first from our passion for sweets, which is inspired by
our everyday job and also by the acknowledged weakness for sweets.</p>
        <p>For us, the Sweet corner means: the right amount of sweet, flawless appearance,
the combination of shape, color and proportion and a right and balanced decor for
the event.</p>
        <p>We have been baking gourmet cupcakes, 100% from Scratch, since day one. We
always use the finest and most natural ingredients we can find.</p>
        <h2>We can make happiness with so little!</h2>
        <p>We can provide services for Weddings, Bar & Bat Mitzvahs, Birthdays, Showers,
Corporate Events, and any other special occasion!</p>
        <p>Our expert bakers are waiting to create a memorable, unique cupcake bursting with
freshness and flavor just for you.</p>
        <p>Their delicious taste, great variety and their sweet universe, colorful and flavorful
cupcakes make the best choice for a chic desert. How could you resist these
delicious cupcakes?</p>
        <div className="disclaimer">Sweet Corner is fictional. This is for demonstration purposes only.</div>
      </main>
      <aside className="sidebar">
        <img src={DotsBox} />
      </aside>
      <p className="slogan center">Please note you will be overwhelmed by the sweet content</p>
      <img src={Cupcakes} />
    </div>
  );
}
