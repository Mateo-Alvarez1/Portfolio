import "./contact.css";
import proyects from "../../assets/proyects.png";
import emailjs from '@emailjs/browser'

export const Contact = () => {

    const onSubmit = ( e ) => {
        e.preventDefault()
        emailjs.sendForm('service_sqtbykw' ,'template_bv0fwc2' , e.target , 'LpRfl3sUVFUBc0u-P')
          .then( resp => console.log(resp) )
          .catch( error => console.log(error))

          e.target.reset()
    }  


  return (
    <div className="contact_container" id='contact'> 
      <div className="about_title skills_title">
        <span id="about_span">Get in touch</span>
        <h1 id="about_h1">Contact Me</h1>
      </div>
      <div className="contact_container_form">
        <div>
            <img src={ proyects } alt="Contact me" />
        </div>
        <div className="contact_form">
            <form onSubmit={onSubmit}>
                <input name="name" type="text" placeholder="Name of Company" required/>
                <input name="email" type="email" placeholder="Your Email" required/>
                <textarea name="message" type="text" placeholder="Your Message" required></textarea>
                <div className="button_container">
                    <button type="submit" className="button_outline">Send Message</button>
                </div>
            </form>
      </div>

      </div>
    </div>
  );
};
