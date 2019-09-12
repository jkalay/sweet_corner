import React from "react";
import "./footer.scss";
import Phone from "../../assets/images/phone.png";

export default props => {
  let now = new Date();

  return (
    <footer>
      <div className="footer-dots" />
      <div className="footer-copyright">Copyright &copy; {now.getUTCFullYear()} Sweet Corner. All rights reserved.</div>
      <div className="footer-contact">
        <img src={Phone} /> 800 264 2099
      </div>
    </footer>
  );
}
