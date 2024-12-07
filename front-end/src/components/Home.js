import React from 'react';

function Home() {
    return (
        <>
        {/* <!-- slider start --> */}
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="images/1.jpg" className="w-100" alt="sl1" height="570"/>
          <div className="carousel-caption d-none d-md-block mb-2">
            <h4>No Pain No Gain</h4>
            <p>What hurts today makes you stronger tomorrow.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="images/2.jpg" className="w-100" alt="sl2" height="570"/>
          <div className="carousel-caption d-none d-md-block">
            <h4>No Pain No Gain</h4>
            <p>What hurts today makes you stronger tomorrow.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="images/3.jpg" className=" w-100 " alt="sl3" height="570"/>
          <div className="carousel-caption d-none d-md-block">
            <h4>No Pain No Gain</h4>
            <p>What hurts today makes you stronger tomorrow.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
{/* //   <!-- slider end --> */}

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

  {/* <!-- Weight lose start --> */}
  <h1 className="text-center text-white bg-danger w-50 mx-auto rounded-1 my-5">Weight-Lose</h1>
  <div className="container bg-light" id="lose">
    <div className="row">
      <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <img src="images/protein.jpg" alt="" className="img-fluid w-100 border my-3"/>
        <h3 className="mx-3">Add Protein to Your Diet. </h3>
        <p className="mx-3 fs-6 para"> it comes to weight loss, protein is the king of nutrients.Your body burns
          calories when digesting and metabolizing the protein you eat, so a high-protein diet can boost metabolism by
          up to 80-100 calories per day.A high-protein diet can also make you feel more full and reduce your appetite.
          In fact, some studies show that people eat over 400 fewer calories per day on a high-protein diet.Even
          something as simple as eating a high-protein breakfast (like eggs) can have a powerful effect.
        </p>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-4">
        <img src="images/drink.jpg" alt="" className="img-fluid w-100 border my-5"/>
        <h3 className=" mt-2 ms-3">Drink Lemon and Honey Water Every Morning.</h3>
        <p className="mx-3 fs-6 para">Drinking water before meals may also lead to reduced calorie intake, especially for
          middle-aged
          and older people.
          Avoid Liquid calories come from beverages like sugary soft drinks, fruit juices, chocolate milk and energy
          drinks. Green tea is a natural beverage that is loaded with antioxidants.Drinking green tea is linked
          with many benefits, such as increased fat burning and weight loss.
        </p>
      </div>
      <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <img src="images/foods_to_eat_to_lose_weight.jpeg" alt="" className="img-fluid border w-100 my-3"/>
        <h3 className="mt-2">Eat More Fruits and Vegetables.</h3>
        <p className="mx-3 fs-6 para">Fruits and vegetables are extremely healthy, weight-loss-friendly foods.
          In addition to being high in water, nutrients and fiber, they usually have very low energy density. This makes
          it possible to eat large servings without consuming too many calories. Fiber-rich foods may help with weight
          loss.Foods containing lots of fibre can help keep you feeling full, which is perfect for losing weight.Fiber
          may delay stomach emptying, make the stomach expand and promote the release of satiety hormones.</p>
      </div>
    </div>
  </div>

  {/* <!-- Weight lose End --> */}

  {/* <!-- weight-Gain start --> */}
  <h1 className="text-center text-white bg-danger w-50 mx-auto my-4 rounded-1">Weight Gain</h1>
  <div className="container" id="gain">
    <div className="row">
      <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <img src="images/wg1.jpeg" alt="" className="img-fluid w-100 rounded-1 my-3 me-3 "/>
        <h4>Include a protein-rich diet</h4>
        <p className="para fs-6">Protein helps build lean muscle mass. Thus, a greater amount of protein-rich foods like soybean,
          fish, eggs, dairy products, nuts or whey protein helps gain weight.</p>
        <h4>Increased carbs and high-fat foods</h4>
        <p className="para fs-6">It is very important to consume high carbohydrate and high-fat foods like bananas, oats, quinoa,
          blueberries, sweet potatoes, cheese, dark chocolate, etc.</p>
        <h4>Consumption of energy-rich foods</h4>
        <p className="para fs-6">Make sure to eat, energy-dense foods like nuts including almonds, walnuts, peanuts, dried fruits
          including raisins or prunes, dark chocolate, high-fat dairy foods like condensed milk, full-fat cream, cheese,
          milk, veggies like potatoes and yams, etc.</p>
        <h4> Protein shakes</h4>
        <p className="para fs-6">Protein shakes can help a person to gain weight easily and efficiently. A shake is most
          effective at helping to build muscle if drunk shortly after a workout.</p>
      </div>
      <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <img src="images/wg2.jpg" alt="" className="img-fluid w-100 border rounded-1 my-3 ms-3 "/>
        <h4 className=" ms-3">Milk</h4>
        <p className="para ms-3 fs-6">Milk has been used as a weight gainer or muscle builder for decades.
          It provides a good balance of proteins, carbs, and fats and is a good source of calcium, as well as other
          vitamins and minerals.For those trying to add more muscle, milk is an excellent protein source that provides
          both casein and whey proteins.
        </p>
        <h4 className="ms-3">Whole eggs</h4>
        <p className="para ms-3 fs-6">Eggs are one of the healthiest muscle-building foods on the planet. They provide a great
          combination of high quality proteins and healthy fats. Each large raw egg weighing 2 ounces, with shell (50
          grams), has about 74 calories.Eggs are one of the best foods for building muscle
        </p>
        <h4 className="ms-3">Whole grain breadWhole grain bread</h4>
        <p className="para ms-3 fs-6">Whole grain breads are another good carb source to help you gain weight.You can make some very
          simple, high calorie, and well-balanced meals by combining bread with protein sources such as eggs, meat, and
          cheese.Sandwiches are one of the easiest, most versatile, and portable meals for helping you put on weight.
        </p>
      </div>
    </div>
  </div>
{/* <!-- weight-Gain End --> */}

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
            <div className="d-grid col-6 mx-auto">
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

export default Home;