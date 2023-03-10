//Reproducibility calculation functions

document.addEventListener("DOMContentLoaded", function(){
    let reproducibilityButton = document.getElementById('submit-reproducibility');
    reproducibilityButton.addEventListener('click', averageViscosityReproducibility);
})

function averageViscosityReproducibility() {
    //retrives supplied viscosities, calculates average

    let select = document.getElementById('sample-type-reproducibility');
    let viscosity1 = document.getElementById('viscosity-reproducibility-1');
    let viscosity2 = document.getElementById('viscosity-reproducibility-2');

    if(select.value === 'disabled') {
        alert('Please select a sample type from the drop-down menu');
    }
    else if(viscosity1.value === '' || viscosity2.value === '') {
        alert ('Please enter two viscosities');
    } 
    else {
        let viscosity1 = parseFloat(document.getElementById('viscosity-reproducibility-1').value);
        let viscosity2 = parseFloat(document.getElementById('viscosity-reproducibility-2').value);

        let averageViscosity = ((viscosity1 + viscosity2) / 2);
        let preciseAverageViscosity = averageViscosity.toPrecision(4);

        let reproducibilityDetails = document.getElementById('reproducibility-details');
        reproducibilityDetails.innerHTML = `<p>Average viscosity = ${averageViscosity} cSt</p>`;

        document.getElementById('reproducibility-average-viscosity-label').style.display = 'block';
        document.getElementById('reproducibility-average-viscosity').textContent = preciseAverageViscosity;
        document.getElementById('reproducibility-average-viscosity-units').style.display = 'inline';

        reproducibility(viscosity1, viscosity2, averageViscosity);
    }
}

function reproducibility(viscosity1, viscosity2, averageViscosity) {
    //calculates reproducibility factor

    let select = document.getElementById('sample-type-reproducibility');
    let message = '';
    let reproducibility;
    let preciseReproducibility;

    switch(true) {
        case select.value === 'BO40':
            message = '0.0136 x average viscosity, or 1.36%';
            reproducibility = averageViscosity * 0.0136;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select.value === 'BO100':
            message = '0.0190 x average viscosity, or 1.90%';
            reproducibility = averageViscosity * 0.0190;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select.value === 'FO40':
            message = '0.0122 x average viscosity, or 1.22%';
            reproducibility = averageViscosity * 0.0122;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select.value === 'FO100':
            message = '0.0138 x average viscosity, or 1.38%';
            reproducibility = averageViscosity * 0.0138;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select.value === 'FO150':
            message = '0.018 x average viscosity, or 1.8%';
            reproducibility = averageViscosity * 0.018;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;
        
        case select.value === 'PW100':
            message = '0.0366 x (average viscosity ^ 1.2)';
            reproducibility = (averageViscosity ** 1.2) * 0.0366;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select.value === 'RFO50':
            message = '0.08461 x average viscosity, or 8.46%';
            reproducibility = averageViscosity * 0.08461;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select.value === 'RFO100':
            message = '0.1206 x average viscosity, or 12.06%';
            reproducibility = averageViscosity * 0.1206;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select.value === 'ADD100':
            message = '0.00862 x (average viscosity ^ 1.1)';
            reproducibility = (averageViscosity ** 1.1)* 0.00862;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select.value === 'GO40':
            message = '0.0082 x (average viscosity + 1)';
            reproducibility = (averageViscosity + 1) * 0.0082;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select.value === 'JFM20':
            message = '0.002899 x (average viscosity ^ 1.4)';
            reproducibility = (averageViscosity ** 1.4)* 0.002899;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select.value === 'KD40':
            message = '0.0224 x average viscosity, or 2.24%';
            reproducibility = averageViscosity * 0.0224;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select.value === 'UFO40':
            message = '0.000594 x (average viscosity ^ 1.722)';
            reproducibility = (averageViscosity ** 1.722) * 0.000594;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select.value === 'UFO100':
            message = '0.003361 x (average viscosity ^ 1.4633)';
            reproducibility = (averageViscosity ** 1.4633) * 0.003361;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;
        
        case select.value === 'CR':
            message = '0.03 x average viscosity, or 3%';
            reproducibility = averageViscosity * 0.03;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;
    }

    document.getElementById('reproducibility-equation-label').style.display = 'block';
    document.getElementById('reproducibility-equation').innerText = message;
    document.getElementById('reproducibility-factor-label').style.display = 'block';
    document.getElementById('reproducibility-factor').innerText = preciseReproducibility;
    document.getElementById('reproducibility-factor-units').style.display = 'inline';

    let reproducibilityDetails = document.getElementById('reproducibility-details');
    reproducibilityDetails.innerHTML += `<p>Reproducibility factor = ${reproducibility} cSt</p>`;

    reproducibilityUpperLimit(viscosity1, viscosity2, averageViscosity, reproducibility);
}

function reproducibilityUpperLimit(viscosity1, viscosity2, averageViscosity, reproducibility) {
    //calculates upper limit

    let reproducibilityUpper = averageViscosity + reproducibility;
    let precisereproducibilityUpper = reproducibilityUpper.toPrecision(4);
    document.getElementById('reproducibility-upper-limit-label').style.display = 'block';
    document.getElementById('reproducibility-upper-limit').textContent = precisereproducibilityUpper;
    document.getElementById('reproducibility-upper-limit-units').style.display = 'inline';

    let reproducibilityDetails = document.getElementById('reproducibility-details');
    reproducibilityDetails.innerHTML += `<p>Upper limit = ${reproducibilityUpper} cSt</p>`;

    reproducibilityLowerLimit(viscosity1, viscosity2, averageViscosity, reproducibility, reproducibilityUpper);
}

function reproducibilityLowerLimit(viscosity1, viscosity2, averageViscosity, reproducibility, reproducibilityUpper) {
    //calculates lower limit

    let reproducibilityLower = averageViscosity - reproducibility;
    let precisereproducibilityLower = reproducibilityLower.toPrecision(4);

    document.getElementById('reproducibility-lower-limit-label').style.display = 'block';
    document.getElementById('reproducibility-lower-limit').textContent = precisereproducibilityLower;
    document.getElementById('reproducibility-lower-limit-units').style.display = 'inline';

    let reproducibilityDetails = document.getElementById('reproducibility-details');
    reproducibilityDetails.innerHTML += `<p>Lower limit = ${reproducibilityLower} cSt</p>`;

    reproducibilityChecker(viscosity1, viscosity2, reproducibilityUpper, reproducibilityLower);
}

function reproducibilityChecker(viscosity1, viscosity2, reproducibilityUpper, reproducibilityLower) {
    //checks whether supplied viscosities are greater than lower limit and less than upper limit

    if(viscosity1 > reproducibilityLower && viscosity1 < reproducibilityUpper && viscosity2 > reproducibilityLower && viscosity2 < reproducibilityUpper) {
        document.getElementById('reproducibility-output').innerHTML = `
        <i class="fas fa-check icon"></i>
        <span>Your viscosities are repeatable</span>`;
    }
    else {
        document.getElementById('reproducibility-output').innerHTML = `
        <i class="fas fa-xmark icon"></i>
        <span>Your viscosities are not repeatable</span>`;
    }

    document.getElementById('reproducibility-details-button').style.visibility = 'visible';

    document.getElementById('reproducibility-details-header').style.visibility = 'visible';
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('reproducibility-details-button').addEventListener('click', reproducibilityDetails);
})

function reproducibilityDetails() {
    //displays unrounded calculation values

    document.getElementById('reproducibility-details').style.visibility = 'visible';
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('reproducibility-reset').addEventListener('click', reproducibilityReset);
})

function reproducibilityReset() {
    //resets calculation article

    //resets inputs
    document.getElementById('viscosity-reproducibility-1').value = '';
    document.getElementById('viscosity-reproducibility-2').value = '';
    document.getElementById('sample-type-reproducibility').selectedIndex = 0;

    //resets output numbers
    document.getElementById('reproducibility-average-viscosity').textContent = '';
    document.getElementById('reproducibility-equation').textContent = '';
    document.getElementById('reproducibility-factor').textContent = '';
    document.getElementById('reproducibility-upper-limit').textContent = '';
    document.getElementById('reproducibility-lower-limit').textContent = '';
    document.getElementById('reproducibility-output').textContent = '';
    document.getElementById('viscosity-reproducibility-1').focus();

    // resets output units
    document.getElementById('reproducibility-average-viscosity-units').style.display = 'none';
    document.getElementById('reproducibility-factor-units').style.display = 'none';
    document.getElementById('reproducibility-upper-limit-units').style.display = 'none';
    document.getElementById('reproducibility-lower-limit-units').style.display = 'none';
    
    //resets output labels
    document.getElementById('reproducibility-average-viscosity-label').style.display = 'none';
    document.getElementById('reproducibility-equation-label').style.display = 'none';
    document.getElementById('reproducibility-factor-label').style.display = 'none';
    document.getElementById('reproducibility-upper-limit-label').style.display = 'none';
    document.getElementById('reproducibility-lower-limit-label').style.display = 'none';
    
    //resets details button, header and body
    document.getElementById('reproducibility-details-button').style.visibility = 'hidden';
    document.getElementById('reproducibility-details').style.visibility = 'hidden';
    document.getElementById('reproducibility-details-header').style.visibility = 'hidden';
}