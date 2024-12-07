import React from 'react';

function Contact() {
    return (
        <>
          {/* <!-- contact us start --> */}
  <h1 className="text-center text-white bg-danger w-50 mx-auto my-4 rounded-1">Contact us</h1>
  <div className="container bg-dark text-white my-3" id="contact">
    <div className="row">
      <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <form action="">
          <input type="text" placeholder="Your Name" required className="form-control my-3"/>

          <input type="Email" placeholder="Your Email" required className="form-control my-3"/>

          <textarea name="" id="" cols="30" rows="8" className="form-control my-3"
            placeholder="Your Message"></textarea>
            
            <div className="d-grid col-5 mx-auto">
          <button className="btn btn-success my-3">Send</button>
        </div>
        </form>
      </div>
      <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28025.873709351265!2d77.26911912800306!3d28.592749687815644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce48b866af1ef%3A0x58913d62225c2c0!2sNew%20Ashok%20Nagar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1685020402444!5m2!1sen!2sin" height="360" loading="lazy" title='map' referrerPolicy="no-referrer-when-downgrade" className="my-2 w-100"></iframe>
      </div>
    </div>
  </div>
  {/* <!-- contact us end --> */}
        
        </>
    );
}

export default Contact;