//repeatability calculations

document.addEventListener("DOMContentLoaded", function(){
    let repeatabilityButton = document.getElementById('submit-repeatability');
    repeatabilityButton.addEventListener('click', averageViscosityRepeatability);
})

function averageViscosityRepeatability() {
    //retrieves number inputs, calculates average viscosity

    let select = document.getElementById('sample-type-repeatability');
    let viscosity1 = document.getElementById('viscosity-repeatability-1');
    let viscosity2 = document.getElementById('viscosity-repeatability-2');

    if(select.value === 'disabled') {
        alert('Please select a sample type from the drop-down menu');
    }
    else if(viscosity1.value === '' || viscosity2.value === '') {
        alert('Please enter two viscosity values');
    }
    else {
        let viscosity1 = parseFloat(document.getElementById('viscosity-repeatability-1').value);
        let viscosity2 = parseFloat(document.getElementById('viscosity-repeatability-2').value);

        let averageViscosity = ((viscosity1 + viscosity2) / 2);
        let preciseAverageViscosity = averageViscosity.toPrecision(4);

        let repeatabilityDetails = document.getElementById('repeatability-details');
        repeatabilityDetails.innerHTML = `<p>Average viscosity = ${averageViscosity} cSt</p>`;

        document.getElementById('repeatability-average-viscosity-label').style.display = 'block';
        document.getElementById('repeatability-average-viscosity').textContent = preciseAverageViscosity;
        document.getElementById('repeatability-average-viscosity-units').style.display = 'inline';

        repeatability(viscosity1, viscosity2, averageViscosity);
    }
}

function repeatability(viscosity1, viscosity2, averageViscosity) {
    //calculates repeatability factor

    let select = document.getElementById('sample-type-repeatability');
    let message = '';
    let repeatability;
    let preciseRepeatability;

    switch(true) {
        case select.value === 'BO40':
            message = '0.0101 x average viscosity, or 1.01%';
            repeatability = averageViscosity * 0.0101;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select.value === 'BO100':
            message = '0.0085 x average viscosity, or 0.85%';
            repeatability = averageViscosity * 0.0085;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select.value === 'FO40':
            message = '0.0074 x average viscosity, or 0.74%';
            repeatability = averageViscosity * 0.0074;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select.value === 'FO100':
            message = '0.0084 x average viscosity, or 0.84%';
            repeatability = averageViscosity * 0.0084;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select.value === 'FO150' || select.value === 'KD40':
            message = '0.0056 x average viscosity, or 0.56%';
            repeatability = averageViscosity * 0.0056;
            preciseRepeatability = repeatability.toPrecision(4);
            break;
        
        case select.value === 'PW100':
            message = '0.0141 x (average viscosity ^ 1.2)';
            repeatability = (averageViscosity ** 1.2) * 0.0141;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select.value === 'RFO50':
            message = '0.07885 x average viscosity, or 7.88%';
            repeatability = averageViscosity * 0.07885;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select.value === 'RFO100':
            message = '0.08088 x average viscosity, or 8.08%';
            repeatability = averageViscosity * 0.08088;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select.value === 'ADD100':
            message = '0.00192 x (average viscosity ^ 1.1)';
            repeatability = (averageViscosity ** 1.1)* 0.00192;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select.value === 'GO40':
            message = '(average viscosity + 1) x 0.0043';
            repeatability = (averageViscosity + 1) * 0.0043;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select.value === 'JFM20':
            message = '0.001368 x (average viscosity ^ 1.4)';
            repeatability = (averageViscosity ** 1.4)* 0.001368;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select.value === 'UFO40':
            message = '0.001005 x (average viscosity ^ 1.4633)';
            repeatability = (averageViscosity ** 1.722) * 0.000233;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select.value === 'UFO100':
            message = '0.001005 x (average viscosity ^ 1.4633)';
            repeatability = (averageViscosity ** 1.4633) * 0.001005;
            preciseRepeatability = repeatability.toPrecision(4);
            break;
        
        case select.value === 'CR':
            message = '0.03 x average viscosity, or 3%';
            repeatability = averageViscosity * 0.03;
            preciseRepeatability = repeatability.toPrecision(4);
            break;
    }

    document.getElementById('repeatability-equation-label').style.display = 'block';
    document.getElementById('repeatability-equation').innerText = message;
    document.getElementById('repeatability-factor-label').style.display = 'block';
    document.getElementById('repeatability-factor').innerText = preciseRepeatability;
    document.getElementById('repeatability-factor-units').style.display = 'inline';

    let repeatabilityDetails = document.getElementById('repeatability-details');
    repeatabilityDetails.innerHTML += `<p>Repeatability factor = ${repeatability} cSt</p>`;

    repeatabilityUpperLimit(viscosity1, viscosity2, averageViscosity, repeatability);
}

function repeatabilityUpperLimit(viscosity1, viscosity2, averageViscosity, repeatability) {
    //calculates upper limit

    let repeatabilityUpper = averageViscosity + repeatability;
    let preciseRepeatabilityUpper = repeatabilityUpper.toPrecision(4);
    document.getElementById('repeatability-upper-limit-label').style.display = 'block';
    document.getElementById('repeatability-upper-limit').textContent = preciseRepeatabilityUpper;
    document.getElementById('repeatability-upper-limit-units').style.display = 'inline';

    let repeatabilityDetails = document.getElementById('repeatability-details');
    repeatabilityDetails.innerHTML += `<p>Upper limit = ${repeatabilityUpper} cSt</p>`;

    repeatabilityLowerLimit(viscosity1, viscosity2, averageViscosity, repeatability, repeatabilityUpper);
}

function repeatabilityLowerLimit(viscosity1, viscosity2, averageViscosity, repeatability, repeatabilityUpper) {
    //calculates lower limit

    let repeatabilityLower = averageViscosity - repeatability;
    let preciseRepeatabilityLower = repeatabilityLower.toPrecision(4);

    document.getElementById('repeatability-lower-limit-label').style.display = 'block';
    document.getElementById('repeatability-lower-limit').textContent = preciseRepeatabilityLower;
    document.getElementById('repeatability-lower-limit-units').style.display = 'inline';

    let repeatabilityDetails = document.getElementById('repeatability-details');
    repeatabilityDetails.innerHTML += `<p>Lower limit = ${repeatabilityLower} cSt</p>`;

    repeatabilityChecker(viscosity1, viscosity2, repeatabilityUpper, repeatabilityLower);
}

function repeatabilityChecker(viscosity1, viscosity2, repeatabilityUpper, repeatabilityLower) {
    //checks whether supplied viscosities are greater than lower limit and less than upper limit

    if(viscosity1 > repeatabilityLower && viscosity1 < repeatabilityUpper && viscosity2 > repeatabilityLower && viscosity2 < repeatabilityUpper) {
        document.getElementById('repeatability-output').innerHTML = `
        <i class="fas fa-check icon"></i>
        <span>Your viscosities are repeatable</span>`;
    }
    else {
        document.getElementById('repeatability-output').innerHTML = `
        <i class="fas fa-xmark icon"></i>
        <span>Your viscosities are not repeatable</span>`;
    }

    document.getElementById('repeatability-details-button').style.visibility = 'visible';

    document.getElementById('repeatability-details-header').style.visibility = 'visible';
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('repeatability-details-button').addEventListener('click', repeatabilityDetails);
})

function repeatabilityDetails() {
    //displays unrounded calculation values

    document.getElementById('repeatability-details').style.visibility = 'visible';
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('repeatability-reset').addEventListener('click', repeatabilityReset);
})

function repeatabilityReset() {
    //resets calculation article

    //resets inputs
    document.getElementById('viscosity-repeatability-1').value = '';
    document.getElementById('viscosity-repeatability-2').value = '';
    document.getElementById('sample-type-repeatability').selectedIndex = 0;

    //resets output numbers
    document.getElementById('repeatability-average-viscosity').textContent = '';
    document.getElementById('repeatability-equation').textContent = '';
    document.getElementById('repeatability-factor').textContent = '';
    document.getElementById('repeatability-upper-limit').textContent = '';
    document.getElementById('repeatability-lower-limit').textContent = '';
    document.getElementById('repeatability-output').textContent = '';
    document.getElementById('viscosity-repeatability-1').focus();

    // resets output units
    document.getElementById('repeatability-average-viscosity-units').style.display = 'none';
    document.getElementById('repeatability-factor-units').style.display = 'none';
    document.getElementById('repeatability-upper-limit-units').style.display = 'none';
    document.getElementById('repeatability-lower-limit-units').style.display = 'none';
    
    //resets output labels
    document.getElementById('repeatability-average-viscosity-label').style.display = 'none';
    document.getElementById('repeatability-equation-label').style.display = 'none';
    document.getElementById('repeatability-factor-label').style.display = 'none';
    document.getElementById('repeatability-upper-limit-label').style.display = 'none';
    document.getElementById('repeatability-lower-limit-label').style.display = 'none';
    
    //resets details button, header and body
    document.getElementById('repeatability-details-button').style.visibility = 'hidden';
    document.getElementById('repeatability-details').style.visibility = 'hidden';
    document.getElementById('repeatability-details-header').style.visibility = 'hidden';
}