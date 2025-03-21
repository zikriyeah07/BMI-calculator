const form = document.querySelector('form')
form.addEventListener('submit', function (a) {
    a.preventDefault()
    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if (height === "" || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height ${height}`
        return
    }
    else if (weight === "" || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight ${weight}`
        return
    }
    // else {

    //     const bmi = (weight / ((height * height) / 10000));
    //     // results.innerHTML = `Your BMI is: ${bmi} and you are Under Weight`;

    //     if (bmi <= 18.6) {
    //         results.innerHTML = `Your BMI is: ${bmi} and you are Under Weight`;
    //     }
    //     else if (bmi >= 18.6 && bmi <= 24.9) {
    //         results.innerHTML = `Your BMI is: ${bmi} and you hava Normal BMI`;
    //     }
    //     else if (bmi >= 24.9 ) {
    //         results.innerHTML = `Your BMI is: ${bmi} and you hava Normal BMI`;
    //     }
    //     else  {
    //         results.innerHTML = `Your BMI is: ${bmi}`;
    //     }
    else {
        const bmi = weight / ((height / 100) * (height / 100)); // Corrected BMI formula
    
        if (bmi < 18.5) {
            results.innerHTML = `Your BMI is: ${bmi.toFixed(2)} and you are Underweight`;
        } 
        else if (bmi >= 18.5 && bmi <= 24.9) {
            results.innerHTML = `Your BMI is: ${bmi.toFixed(2)} and you have a Normal BMI`;
        } 
        else if (bmi >= 25 && bmi <= 29.9) {
            results.innerHTML = `Your BMI is: ${bmi.toFixed(2)} and you are Overweight`;
        } 
        else {
            results.innerHTML = `Your BMI is: ${bmi.toFixed(2)} and you are Obese`;
        }
    }

    })

