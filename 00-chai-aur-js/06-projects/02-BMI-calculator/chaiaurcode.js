const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || isNaN(height) || height < 0) {
        results.innerHTML = `Please Enter a valid Height ${height}`;
    }
    else if (weight === '' || isNaN(weight) || weight < 0) {
        results.innerHTML = `Please Enter a valid weight ${weight}`;
    }else {
        const bmi = (weight/((height * height)/ 10000)).toFixed(2);
        if (bmi < 18.6) {
            results.innerHTML = `Under Weight (BMI - ${bmi})`
        }
        else if (bmi > 18.6 && bmi <= 24.9) {
            results.innerHTML = `Normal Range (BMI - ${bmi})`
        }
        else{
            results.innerHTML = `Over Weight (BMI - ${bmi})`
        }
    }
})