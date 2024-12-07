import React from 'react';

function About() {
    return (
        <>
        {/* //   <!-- about us start --> */}
  <h1 className="text-center text-white bg-danger w-50 mx-auto rounded-1 my-4">ABOUT US</h1>

<div className="container bg-light mt-3">
  <h3 className="text-center">EVERYTHING IS POSSIBLE WITH ME</h3>
  <p className="text-center">Strength doesn't come from what you can do.
    comes from overcoming the things you once thought you couldn't.</p>
  <div className="row">
    <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-4">
      <img src="images/a.jpg" alt="" className=" img-fluid w-100 mt-3 rounded-1"/>
      <h3 className="text-center">Personal Training</h3>
      <p className="text-center fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia minima sed quibus adipisci similique!</p>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
      <img src="images/b.jpg" alt="" className="img-fluid w-100 mt-3 rounded-1"/><br/>
      <h3 className="text-center">Cardio Training</h3>
      <p className="text-center fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia minima sed quibus adipisci similique!</p>
    </div>
    <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-4">
      <img src="images/c.jpg" alt="" className="img-fluid w-100 mt-3 rounded-1"/><br/>
      <h3 className="text-center">FreeStyle Training</h3>
      <p className="text-center fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia minima sed quibus adipisci similique!</p>
    </div>
  </div>
  <div className="row">
    <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-4">
      <img src="images/d.jpg" alt="" className="img-fluid w-100 mt-3 rounded-1"/><br/>
      <h3 className="text-center">Sport Training</h3>
      <p className="text-center fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia minima sed quibus adipisci similique!</p>
    </div>
    <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-4">
      <img src="images/e.jpg" alt="" className="img-fluid w-100 mt-3 rounded-1"/><br/>
      <h3 className="text-center">Functional Training</h3>
      <p className=" text-center fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia minima sed quibus adipisci similique!</p>
    </div>
    <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-4">
      <img src="images/f.jpg" alt="" className="img-fluid w-100 mt-3 rounded-1"/><br/>
      <h3 className="text-center">Crossfit</h3>
      <p className="text-center fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia minima sed quibus adipisci similique!</p>
    </div>
  </div>
</div>
{/* <!-- about us End --> */}
        
        </>
    );
}

export default About;