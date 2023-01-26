//Suspended flow Viscometer / Ubbelohde viscometer logic

document.addEventListener("DOMContentLoaded", function(){
    let getValuesUbbelohdeButton = document.getElementById('submit-ubbelohde');
    getValuesUbbelohdeButton.addEventListener('click', getValuesUbbelohde);
})

// A note on the above:
// In the original project, the DOMContentLoaded event listener was not necessary
// However, with the determinability.html file being a template that extends base.html,
// the static javaScript files are loaded after the document is ready, which causes
// a TypeError, since the JS cannot find and hence add event listeners to HTML elements
// that do not yet exist
// Therefore, the DOMContentLoaded event listener is needed to delay application
// of the event listeners until the document is ready

function getValuesUbbelohde() {
    //retrieves values from number inputs

    let select = document.getElementById('sample-type-determinability');
    let runTime1 = document.getElementById('run-time-1');
    let runTime2 = document.getElementById('run-time-2');
    let constant = document.getElementById('constant-input');

    if(select.value === 'disabled') {
        alert('Please select a sample type from the drop-down menu');
    }
    else if(runTime1.value === '' || runTime2.value === '') {
        alert('Please enter two run-times');
    }
    else if(constant.value === '') {
        alert('Please enter a viscometer constant');
    }
    else {
        let time1 = parseFloat(document.getElementById('run-time-1').value);
        let time2 = parseFloat(document.getElementById('run-time-2').value);
        let viscConstant = parseFloat(document.getElementById('constant-input').value);

        calculateUbbelohde(time1, time2, viscConstant);
    }
}

function calculateUbbelohde(runTime1, runTime2, constant) {
    //calculates kinematic viscosities

    let kv1 = runTime1 * constant;
    let kv2 = runTime2 * constant;
    let preciseKv1 = kv1.toPrecision(4);
    let preciseKv2 = kv2.toPrecision(4);

    document.getElementById('determinability-results').style.display = 'block';
    document.getElementById('determinability-kv-1-label').style.display = 'block';
    document.getElementById('determinability-kv-2-label').style.display = 'block';
    document.getElementById('determinability-kv-1').innerText = preciseKv1;
    document.getElementById('determinability-kv-2').innerText = preciseKv2;
    document.getElementById('determinability-kv-1-units').style.display = 'inline';
    document.getElementById('determinability-kv-2-units').style.display = 'inline';

    let determinabilityDetails = document.getElementById('determinability-details');
    determinabilityDetails.innerHTML = `
    <p>Kinematic viscosity 1 = ${kv1} cSt</p>
    <p>Kinematic viscosity 2 = ${kv2} cSt</p>`;

    calculateFinalUbbelohde(kv1, kv2);
}

function calculateFinalUbbelohde(kv1, kv2) {
    //calculates final calculated viscosity

    let finalViscosity = ((kv1 + kv2) / 2);
    let preciseFinalViscosity = finalViscosity.toPrecision(4);

    document.getElementById('determinability-final-kv-label').style.display = 'block';
    document.getElementById('determinability-final-kv').innerText = preciseFinalViscosity;
    document.getElementById('determinability-final-kv-units').style.display = 'inline';

    let determinabilityDetails = document.getElementById('determinability-details');
    determinabilityDetails.innerHTML += `
    <p>the final calculated viscosity is ${finalViscosity} cSt</p>`;

    determinability(finalViscosity, kv1, kv2);
}

document.addEventListener("DOMContentLoaded", function(){
    let getValuesZeitfuchsButton = document.getElementById('submit-zeitfuchs');
    getValuesZeitfuchsButton.addEventListener('click', getValuesZeitfuchs);
})


function getValuesZeitfuchs(){
    //retrieves values from number inputs

    let select = document.getElementById('sample-type-determinability');
    let runTime1 = document.getElementById('run-time-1');
    let runTime2 = document.getElementById('run-time-2');
    let constant1 = document.getElementById('constant-1-input');
    let constant2 = document.getElementById('constant-2-input');

    if(select.value === 'disabled') {
        alert('Please select a sample type from the drop down menu');
    }
    else if(runTime1.value === '' || runTime2.value === '') {
        alert('Please enter two run-times');
    }
    else if (constant1.value === '' || constant2.value === '') {
        alert('Please enter two viscometer constants');
    }
    else {
        let time1 = parseFloat(document.getElementById('run-time-1').value);
        let time2 = parseFloat(document.getElementById('run-time-2').value);
        let viscConstant1 = parseFloat(document.getElementById('constant-1-input').value);
        let viscConstant2 = parseFloat(document.getElementById('constant-2-input').value);

        calculateZeitfuchs(time1, time2, viscConstant1, viscConstant2);
    }
}

function calculateZeitfuchs(runTime1, runTime2, constant1, constant2) {
    //calculates kinematic viscosities

    let kv1 = runTime1 * constant1;
    let kv2 = runTime2 * constant2;
    let preciseKv1 = kv1.toPrecision(4);
    let preciseKv2 = kv2.toPrecision(4);

    document.getElementById('determinability-kv-1-label').style.display = 'block';
    document.getElementById('determinability-kv-2-label').style.display = 'block';
    document.getElementById('determinability-kv-1').innerText = preciseKv1;
    document.getElementById('determinability-kv-2').innerText = preciseKv2;
    document.getElementById('determinability-kv-1-units').style.display = 'inline';
    document.getElementById('determinability-kv-2-units').style.display = 'inline';

    let determinabilityDetails = document.getElementById('determinability-details');
    determinabilityDetails.innerHTML = `
    <p>Kinematic viscosity 1 is ${kv1} cSt</p>
    <p>Kinematic viscosity 2 is ${kv2} cSt</p>`;

    calculateFinalZeitfuchs(kv1, kv2);
}

function calculateFinalZeitfuchs(kv1, kv2) {
    //calculates final calculated viscosity

    let finalViscosity = ((kv1 + kv2) / 2);
    let preciseFinalViscosity = finalViscosity.toPrecision(4);

    document.getElementById('determinability-final-kv-label').style.display = 'block';
    document.getElementById('determinability-final-kv').innerText = preciseFinalViscosity;
    document.getElementById('determinability-final-kv-units').style.display = 'inline';

    let determinabilityDetails = document.getElementById('determinability-details');
    determinabilityDetails.innerHTML += `
    <p>The final calculated viscosity is ${finalViscosity} cSt</p>`;

    determinability(finalViscosity, kv1, kv2);
}

//Determinability calculations

function determinability(finalViscosity, kv1, kv2) {
    //calculates determinability factor

    let select = document.getElementById('sample-type-determinability');
    let message = '';
    let determinability;
    let preciseDeterminability;

    switch(true) {
        case select.value === 'BO40'|| select.value === 'FO40' || select.value === 'KD40':
            message = '0.0037 x final calculated viscosity, or 0.37%';
            determinability = finalViscosity * 0.0037;
            preciseDeterminability = determinability.toPrecision(4);
            break;
        
        case select.value === 'BO100' || select.value === 'FO100':
            message = '0.0036 x Final calculated viscosity, or 0.36%';
            determinability = finalViscosity * 0.0036;
            preciseDeterminability = determinability.toPrecision(4);
            break;

        case select.value === 'FO150':
            message = '0.0150 x Final calculated viscosity, or 1.5%';
            determinability = finalViscosity * 0.0150;
            preciseDeterminability = determinability.toPrecision(4);
            break;
        
        case select.value === 'PW100':
            message = '0.0080 x Final calculated viscosity, or 0.80%';
            determinability = finalViscosity * 0.0080;
            preciseDeterminability = determinability.toPrecision(4);
            break;

        case select.value === 'RFO50':
            message = '0.0244 x Final calculated viscosity, or 2.44%';
            determinability = finalViscosity * 0.0244;
            preciseDeterminability = determinability.toPrecision(4);
            break;

        case select.value === 'RFO100' || select.value === 'CR':
            message = '0.03 x Final calculated viscosity, or 3%';
            determinability = finalViscosity * 0.03;
            preciseDeterminability = determinability.toPrecision(4);
            break;

        case select.value === 'ADD100':
            message = '(Final calculated viscosity ^ 1.1) x 0.00106';
            determinability = (finalViscosity ** 1.1) * 0.00106;
            preciseDeterminability = determinability.toPrecision(4);
            break;

        case select.value === 'GO40':
            message = '(Final calculated viscosity + 1) x 0.0013';
            determinability = (finalViscosity + 1) * 0.0013;
            preciseDeterminability = determinability.toPrecision(4);
            break;

        case select.value === 'JFM20':
            message = '0.007608 x Final calculated viscosity, or 0.7608%';
            determinability = finalViscosity * 0.007608;
            preciseDeterminability = determinability.toPrecision(4);
            break;
    }

    
    document.getElementById('determinability-equation-label').style.display = 'block';
    document.getElementById('determinability-equation').innerText = message;
    document.getElementById('determinability-factor-label').style.display = 'block';
    document.getElementById('determinability-factor').innerText = preciseDeterminability;
    document.getElementById('determinability-factor-units').style.display = 'inline';

    let determinabilityDetails = document.getElementById('determinability-details');
    determinabilityDetails.innerHTML += `<p>The determinability factor is ${determinability} cSt</p>`;

    upperLimit(determinability, finalViscosity, kv1, kv2);
}

function upperLimit(determinability, finalViscosity, kv1, kv2) {
    //calculates upper limit

    let upperAllowedViscosity = finalViscosity + determinability;
    let preciseUpperAllowedViscosity = upperAllowedViscosity.toPrecision(4);

    document.getElementById('determinability-upper-limit-label').style.display = 'block';
    document.getElementById('determinability-upper-limit').innerText = preciseUpperAllowedViscosity;
    document.getElementById('determinability-upper-limit-units').style.display = 'inline';

    let determinabilityDetails = document.getElementById('determinability-details');
    determinabilityDetails.innerHTML += `<p>The determinability upper limit is ${finalViscosity} + ${determinability} = ${upperAllowedViscosity} cSt</p>`;

    lowerLimit(determinability, finalViscosity, upperAllowedViscosity, kv1, kv2);
}

function lowerLimit(determinability, finalViscosity, upperAllowedViscosity, kv1, kv2) {
    //calculates lower limit

    let lowerAllowedViscosity = finalViscosity - determinability;
    let preciseLowerAllowedViscosity = lowerAllowedViscosity.toPrecision(4);

    document.getElementById('determinability-lower-limit-label').style.display = 'block';
    document.getElementById('determinability-lower-limit').innerText = preciseLowerAllowedViscosity;
    document.getElementById('determinability-lower-limit-units').style.display = 'inline';

    let determinabilityDetails = document.getElementById('determinability-details');
    determinabilityDetails.innerHTML += `<p>The determinability lower limit ${finalViscosity} - ${determinability} = ${lowerAllowedViscosity} cSt</p>`;

    checker(upperAllowedViscosity, lowerAllowedViscosity, kv1, kv2);
}

function checker(upperAllowedViscosity, lowerAllowedViscosity, kv1, kv2) {
    //checks if kinematic viscosities are less than upper limit and greater than lower limit

    if(kv1 > lowerAllowedViscosity && kv1 < upperAllowedViscosity && kv2 > lowerAllowedViscosity && kv2 < upperAllowedViscosity) {
        document.getElementById('determinability-output').innerHTML = `
        <i class="fas fa-check"></i>
        <span>Your viscosities are determinable</span>`;
    }

    else {
        document.getElementById('determinability-output').innerHTML = `
        <i class="fas fa-xmark"></i>
        <span>Your viscosities are not determinable</span>`;
    }

    document.getElementById('determinability-details-button').style.visibility = 'visible';

    document.getElementById('determinability-details-header').style.visibility = 'visible';
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('determinability-details-button').addEventListener('click', determinabilityDetails);
})

function determinabilityDetails() {
    //displays unrounded values

    document.getElementById('determinability-details').style.visibility = 'visible';
}

document.addEventListener("DOMContentLoaded", function(){
    let resetButton = document.getElementById('reset-determinability');
    resetButton.addEventListener('click', reset);
})

function reset() {
    //resets calculation article

    document.getElementById('run-time-1').value = '';
    document.getElementById('run-time-2').value = '';
    document.getElementById('run-time-1').focus();
    document.getElementById('constant-input').selectedIndex = 0 // resets viscometer dropdown menu to the initial disabled option
    document.getElementById('sample-type-determinability').selectedIndex = 0

    document.getElementById('determinability-kv-1').textContent = '';
    document.getElementById('determinability-kv-2').textContent = '';
    document.getElementById('determinability-final-kv').textContent = '';
    document.getElementById('determinability-equation').textContent = '';
    document.getElementById('determinability-factor').textContent = '';
    document.getElementById('determinability-upper-limit').textContent = '';
    document.getElementById('determinability-lower-limit').textContent = '';
    document.getElementById('determinability-output').textContent = '';

    document.getElementById('determinability-kv-1-units').style.display = 'none';
    document.getElementById('determinability-kv-2-units').style.display = 'none';
    document.getElementById('determinability-final-kv-units').style.display = 'none';
    document.getElementById('determinability-factor-units').style.display = 'none';
    document.getElementById('determinability-upper-limit-units').style.display = 'none';
    document.getElementById('determinability-lower-limit-units').style.display = 'none';
    document.getElementById('determinability-details-button').style.display = 'none';
    document.getElementById('determinability-details').style.display = 'none';
    document.getElementById('determinability-kv-1-label').style.display = 'none';
    document.getElementById('determinability-kv-2-label').style.display = 'none';
    document.getElementById('determinability-final-kv-label').style.display = 'none';
    document.getElementById('determinability-equation-label').style.display = 'none';
    document.getElementById('determinability-factor-label').style.display = 'none';
    document.getElementById('determinability-upper-limit-label').style.display = 'none';
    document.getElementById('determinability-lower-limit-label').style.display = 'none';
    document.getElementById('determinability-results').style.display = 'none';
    document.getElementById('determinability-details-header').style.visibility = 'hidden';
}