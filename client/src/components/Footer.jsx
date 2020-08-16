import React from "react";

function Footer() {

  function signin(){
    const emailInput = document.getElementById("email-input").value;
    if (emailInput){
      document.getElementById("signin-form").textContent = "You're in!";
    } else {
      document.getElementById("email-input").placeholder = "please enter your email";
    }

  }

  return (
    <div className="footer">
      <div className="col-sm-3 newsletter">
        <p>newsletter</p>
        <div id="signin-form" className="newsletter-signin">
          <input id="email-input" type="email" name="email" placeholder="email"></input>
          <button className="button" onClick={signin}><span>→</span></button>
        </div>


      </div>
      <div className="col-sm-9 contact">
        <p>creater by Venessa Liu</p>
        <a href="mailto:venessa7599@gmail.com">venessa7599@gmail.com</a>
        <p>more works @ <a href="http://www.venessaliu.com">www.venessaliu.com</a></p>
      </div>


    </div>
  )
}

export default Footer;
