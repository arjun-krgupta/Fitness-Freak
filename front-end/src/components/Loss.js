import React from 'react';

function Loss() {
    return (
       <>
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
       </>
    );
}

export default Loss;