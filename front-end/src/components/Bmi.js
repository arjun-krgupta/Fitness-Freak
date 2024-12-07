import React from 'react';

function Bmi() {

    const submitData=()=> {
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    height = height * 12;
    height = height * 0.0254; // now height in meter
    let bmi = weight / (height * height)
    // bmi value = Math.round(bmi value)
    if (!Number.isInteger(bmi)) {
        bmi = bmi.toFixed(1)
    }
    document.getElementById("bmi").value = bmi

    if (bmi < 18.5) {
        document.getElementById("result").innerHTML = "Underweight <br>A few more weight can lessen your chances of thinning bones and a weakened immune system, as well as feeling tired. Women who are underweight may have irregular periods or stop having them altogether. Underweight men may have lower sperm counts."
        document.getElementById("result").style = "margin-left:60px;color:red;font-size:16px;"
        return false
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        document.getElementById("result").innerHTML = "Normal or Healthy weight <br> You're in a good place now.Keep up your healthy habits to maintain your weight."
        document.getElementById("result").style = "margin-left:60px;color:red;font-size:16px;"
        return false
    }
    else if (bmi >= 25 && bmi < 29.9) {
        document.getElementById("result").innerHTML = "Over-Weight <br> Since your weight puts you in the overweight range losing some extra weight is a good first step toward lowering your chances of health problems."
       
        document.getElementById("result").style = "margin-left:60px;color:red;font-size:16px;"
        return false
    }
    else if (bmi >= 30 && bmi < 34.9) {
        document.getElementById("result").innerHTML = "Obesity (Class 1)"
        document.getElementById("result").style = "margin-left:60px;color:red;font-size:16px;"
        return false
    }
    else if (bmi >= 35 && bmi < 39.9) {
        document.getElementById("result").innerHTML = "Obesity (Class 2)"
        document.getElementById("result").style = "margin-left:60px;color:red;font-size:16px;"
        return false
    }
    else if (bmi >= 40) {
        document.getElementById("result").innerHTML = "Extreme Obesity <br> you're much more likely to have serious health problems.You just keep Exercises in regular basis to loose your weight and also follow the Diet plan."
        document.getElementById("result").style = "margin-left:60px;color:red;font-size:16px;"
        return false
    }
    else {
        document.getElementById("result").innerHTML = ""
    }
}
    return (
        <>
            <div className="container-fluid" style={{backgroundImage:'url("https://hdwallsource.com/img/2014/9/blur-26347-27038-hd-wallpapers.jpg")', backgroundRepeat:'no-repeat', backgroundPosition:'center',backgroundSize:'100% 100%'}}>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-5 mx-auto">
                        <div className="border rounded-2 my-5 bg-white w-75">
                            <h2 className="text-center my-5"> BMI Calculator </h2>
                            <form action="">
                                <input type="text" id="weight" className="form-control my-4 mx-auto w-75" placeholder="Weight in kg" />

                                <input type="text" id="height" className="form-control my-4 mx-auto w-75" placeholder="Height in ft" />

                                <input type="text" className="form-control my-4 mx-auto w-75" id="bmi" placeholder="BMI value" />

                                <div id="result"></div>
                                <div className="d-grid gap-2 mx-auto col-8 my-4">
                            <button className="btn btn-secondary" type="button" id="btn" onClick={()=>submitData()} >Check BMI</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bmi;