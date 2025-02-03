
import react from 'react'
import { useState } from 'react';
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const contact = () => {

// Start the section which sends the acknowledgement in the email id 
const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c507f54c-6a7d-4744-bbab-73457a7285a8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
    } else {
      alert(data.message);
    }
  }
// Ending of the section which sends the acknowledgement in the email id 

 // Adding  a function which handels a call 
  const handleCall = ()=>{

      const isMobile = /iphone|Android|iPad/i.test(navigator.userAgent); //check that webpage are opened in which device

      if(isMobile){
        window.location.href = "tel:+91 8340181676";
      }
      else{
        alert("To call,use Skype or VOIP or dial manually ");
      }
  }

  // This function used to copy the number to the clipboard
  const copyToClipBoard = () =>{
    navigator.clipboard.writeText("+91 8340181676");
    alert("Phone number copied! You can paste it into your phone or VoIP app.");
  }

  const handleClick = ()=>{
    handleCall();
    copyToClipBoard();
  }

  const handleEmail = () => {
    window.location.href = 'mailto:priyanshukumar23933@gmail.com'
  }

  return (

    
    <div className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">

        <div className="contact-left">

          <h2>Let's Talk</h2>
          <p>
            Hey there! If you’re looking for a developer who’s passionate about
            building great digital experiences, I’d love to hear from you.
            Whether you have an exciting project in mind, need some technical
            guidance, or just want to chat about the latest in tech, feel free
            to reach out.</p>
            
            <p>I believe the best ideas come from great
            conversations, and I’m always open to new opportunities and
            collaborations. Let’s connect and create something amazing together!
          </p>

          <div className="contact-details">

            <div className="contact-detail" onClick={handleEmail}>
                <img src={mail_icon} alt="" />
                <p>priyanshukumar23933@gmail.com</p>
            </div>

            <div className="contact-detail" onClick={handleClick}>
                <img src={call_icon} alt="" />
                <p>8340181676</p>
            </div>

            <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p>Modinagar,Ghaziabad</p>
            </div>

          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">

           <lable htmlFor="">Your Name</lable>
           <input type="text" placeholder="Enter your name" name='name'></input>
           
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter your email" name='email'></input>

            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter Your Message"></textarea>

            <button type="submit" className="contact-submit">Submit</button>
        </form>


      </div>
    </div>
  );
};

export default contact;
