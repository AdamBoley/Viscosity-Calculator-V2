//Calibration calculations

document.addEventListener("DOMContentLoaded", function(){
    let calibrationCalculateButton = document.getElementById('submit-calibration');
    calibrationCalculateButton.addEventListener('click', getValuesCalibration);
})

function getValuesCalibration() {
    //retrieves number input values

    let runTime1 = document.getElementById('calibration-run-time-1');
    let runTime2 = document.getElementById('calibration-run-time-2');
    let constant = document.getElementById('calibration-constant-input');
    let calibrationFluidViscosity = document.getElementById('calibration-fluid-viscosity');

    if(runTime1.value === '' || runTime2.value === '') {
        alert('Please enter two run-times');
    }
    else if (constant.value === 'disabled') {
        alert('Please enter a constant');
    }
    else if (calibrationFluidViscosity.value === '') {
        alert('Please enter a calibration fluid viscosity');
    }
    else {
        let calibrationRunTime1 = parseFloat(document.getElementById('calibration-run-time-1').value);
        let calibrationRunTime2 = parseFloat(document.getElementById('calibration-run-time-2').value);
        let calibrationConstant = parseFloat(document.getElementById('calibration-constant-input').value);

        calculateCalibration(calibrationRunTime1, calibrationRunTime2, calibrationConstant);
    }
}

function calculateCalibration(calibrationRunTime1, calibrationRunTime2, calibrationConstant) {
    //calculates average run-time, kinematic viscosities and average viscosity

    let averageRunTime = ((calibrationRunTime1 + calibrationRunTime2) / 2);
    let viscosity1 = calibrationRunTime1 * calibrationConstant;
    let viscosity2 = calibrationRunTime2 * calibrationConstant;
    let averageViscosity = ((viscosity1 + viscosity2) / 2);

    let calibrationDetails = document.getElementById('calibration-details');
    calibrationDetails.innerHTML = `
    <p>Average run-time = ${averageRunTime}s</p>
    <p>Average viscosity = ${averageViscosity} cSt</p>`;

    document.getElementById('calibration-average-run-time-label').style.display = 'block';
    document.getElementById('calibration-average-run-time').textContent = averageRunTime;
    document.getElementById('calibration-average-run-time-units').style.display = 'inline';
    document.getElementById('calibration-average-viscosity-label').style.display = 'block';
    document.getElementById('calibration-average-viscosity').textContent = averageViscosity;
    document.getElementById('calibration-average-viscosity-units').style.display = 'inline';

    tolerance(averageViscosity);
}

function tolerance(averageViscosity) {
    //sets tolerance band based on calibration fluid viscosity

    let calibrationFluidViscosity = document.getElementById('calibration-fluid-viscosity').value;
    let toleranceBand;
    
    switch (true) {
        case calibrationFluidViscosity < 10 :
            document.getElementById('calibration-viscosity-range').textContent = '<10';
            document.getElementById('calibration-tolerance-band').textContent = '+/- 0.30%';
            toleranceBand = 0.30;
            break;
        
        case calibrationFluidViscosity >= 10 && calibrationFluidViscosity < 100:
            document.getElementById('calibration-viscosity-range').textContent = '10 to 100';
            document.getElementById('calibration-tolerance-band').textContent = '+/- 0.32%';
            toleranceBand = 0.32;
            break;
        
        case calibrationFluidViscosity >= 100 && calibrationFluidViscosity < 1000 :
            document.getElementById('calibration-viscosity-range').textContent = '100 to 1000';
            document.getElementById('calibration-tolerance-band').textContent = '+/- 0.36%';
            toleranceBand = 0.36;
            break;

        case calibrationFluidViscosity >= 1000 && calibrationFluidViscosity < 10000 :
            document.getElementById('calibration-viscosity-range').textContent = '1000 to 10000';
            document.getElementById('calibration-tolerance-band').textContent = '+/- 0.42%';
            toleranceBand = 0.42;
            break;

        case calibrationFluidViscosity >= 10000 && calibrationFluidViscosity < 100000 :
            document.getElementById('calibration-viscosity-range').textContent = '10000 to 100000';
            document.getElementById('calibration-tolerance-band').textContent = '+/- 0.54%';
            toleranceBand = 0.54;
            break;

        case calibrationFluidViscosity >= 100000 :
            document.getElementById('calibration-viscosity-range').textContent = '>100000';
            document.getElementById('calibration-tolerance-band').textContent = '+/- 0.73%';
            toleranceBand = 0.73;
            break;
    }

    document.getElementById('calibration-viscosity-range-label').style.display = 'block';
    document.getElementById('calibration-viscosity-range-units').style.display = 'inline';
    document.getElementById('calibration-tolerance-band-label').style.display = 'block';
    
    percentageDifference(calibrationFluidViscosity, averageViscosity, toleranceBand);
}

function percentageDifference(calibrationFluidViscosity, averageViscosity, toleranceBand) {
    //calculates percentage difference between average viscosity and calibration fluid viscosity
    
    let numerator = calibrationFluidViscosity - averageViscosity;
    numerator = Math.abs(numerator);

    let denominator = ((calibrationFluidViscosity / 2) + (averageViscosity / 2));
    
    denominator = Math.abs(denominator);

    let percentageDifference = (numerator / denominator) * 100;
    let precisePercentageDifference = percentageDifference.toFixed(2);

    document.getElementById('calibration-percentage-difference-label').style.display = 'block';
    document.getElementById('calibration-percentage-difference').textContent = precisePercentageDifference;
    document.getElementById('calibration-percentage-difference-units').style.display = 'inline';

    let calibrationDetails = document.getElementById('calibration-details');
    calibrationDetails.innerHTML += `Percentage difference = ${percentageDifference}%`;

    percentageDifferenceChecker(percentageDifference, toleranceBand);
}

function percentageDifferenceChecker(percentageDifference, toleranceBand) {
    //checks whether percentage difference is less than or greater than the tolerance band

    if(percentageDifference <= toleranceBand) {
        document.getElementById('calibration-output').innerHTML = `
        <i class="fas fa-check icon"></i>
        <span>The viscometer passes the calibration check</span>`;
    }
    else if(percentageDifference > toleranceBand) {
        document.getElementById('calibration-output').innerHTML = `
        <i class="fas fa-xmark icon"></i>
        <span>The viscometer fails the calibration check</span>`;
    }

    document.getElementById('calibration-details-header').style.visibility = 'visible';
    document.getElementById('calibration-details-button').style.visibility = 'visible';
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('calibration-details-button').addEventListener('click', calibrationDetails);
})

function calibrationDetails() {
    //displays unrounded calculation values
    
    document.getElementById('calibration-details').style.visibility = 'visible';
}

document.addEventListener("DOMContentLoaded", function(){
    let calibrationResetButton = document.getElementById('calibration-reset');
    calibrationResetButton.addEventListener('click', calibrationReset);
})

function calibrationReset() {
    //resets calculation article for further use

    //reset inputs
    document.getElementById('calibration-run-time-1').value = '';
    document.getElementById('calibration-run-time-2').value = '';
    document.getElementById('calibration-constant-input').selectedIndex = 0;
    document.getElementById('calibration-run-time-1').focus();

    //reset outputs
    document.getElementById('calibration-fluid-viscosity').value = '';
    document.getElementById('calibration-average-run-time').textContent = '';
    document.getElementById('calibration-average-viscosity').textContent = '';
    document.getElementById('calibration-viscosity-range').textContent = '';
    document.getElementById('calibration-tolerance-band').textContent = '';
    document.getElementById('calibration-percentage-difference').textContent = '';
    document.getElementById('calibration-output').textContent = '';
    
    //reset units
    document.getElementById('calibration-average-run-time-units').style.display = 'none';
    document.getElementById('calibration-average-viscosity-units').style.display = 'none';
    document.getElementById('calibration-viscosity-range-units').style.display = 'none';
    document.getElementById('calibration-percentage-difference-units').style.display = 'none';
    
    //reset labels
    document.getElementById('calibration-average-run-time-label').style.display = 'none';
    document.getElementById('calibration-average-viscosity-label').style.display = 'none';
    document.getElementById('calibration-viscosity-range-label').style.display = 'none';
    document.getElementById('calibration-tolerance-band-label').style.display = 'none';
    document.getElementById('calibration-percentage-difference-label').style.display = 'none';

    //reset details
    document.getElementById('calibration-details-header').style.visibility = 'hidden';
    document.getElementById('calibration-details-button').style.visibility = 'hidden';
    document.getElementById('calibration-details').style.visibility = 'hidden';
}
