

export function calibration(runTime1, runTime2, constant, calibrationFluidViscosity){

    let averageRunTime = (((runTime1 * 1) + (runTime2 * 1)) / 2);
    let viscosity1 = runTime1 * constant;
    let viscosity2 = runTime2 * constant;
    let averageViscosity = ((viscosity1 + viscosity2) / 2);

    $('#calibration-details').append(`<p>Average run-time = ${averageRunTime}s</p><p>Average viscosity = ${averageViscosity} cSt</p>`);

    $('#calibration-average-run-time-label').css('display', 'block');
    $('#calibration-average-run-time').text(averageRunTime);
    $('#calibration-average-run-time-units').css('display', 'inline');
    $('#calibration-average-viscosity-label').css('display', 'block');
    $('#calibration-average-viscosity').text(averageViscosity);
    $('#calibration-average-viscosity-units').css('display', 'inline');

    // calculation of tolerance band

    let toleranceBand;

    switch (true) {
        case calibrationFluidViscosity < 10 :
            $('#calibration-viscosity-range').text('<10');
            $('#calibration-tolerance-band').text('+/- 0.30%');
            toleranceBand = 0.30;
            break;
        
        case calibrationFluidViscosity >= 10 && calibrationFluidViscosity < 100:
            $('#calibration-viscosity-range').text('10 to 100');
            $('#calibration-tolerance-band').text('+/- 0.32%');
            toleranceBand = 0.32;
            break;
        
        case calibrationFluidViscosity >= 100 && calibrationFluidViscosity < 1000 :
            $('#calibration-viscosity-range').text('100 to 1000');
            $('#calibration-tolerance-band').text('+/- 0.36%');
            toleranceBand = 0.36;
            break;

        case calibrationFluidViscosity >= 1000 && calibrationFluidViscosity < 10000 :
            $('#calibration-viscosity-range').text('1000 to 10000');
            $('#calibration-tolerance-band').text('+/- 0.42%');
            toleranceBand = 0.42;
            break;

        case calibrationFluidViscosity >= 10000 && calibrationFluidViscosity < 100000 :
            $('#calibration-viscosity-range').text('10000 to 100000');
            $('#calibration-tolerance-band').text('+/- 0.54%');
            toleranceBand = 0.54;
            break;

        case calibrationFluidViscosity >= 100000 :
            $('#calibration-viscosity-range').text('>100000');
            $('#calibration-tolerance-band').text('+/- 0.73%');
            toleranceBand = 0.73;
            break;
    }

    $('#calibration-viscosity-range-label').css('display', 'block');
    $('#calibration-viscosity-range-units').css('display', 'inline');
    $('#calibration-tolerance-band-label').css('display', 'block');

    // percentage difference calculation

    // let numerator = calibrationFluidViscosity - averageViscosity;
    // numerator = Math.abs(numerator);
    let numerator = Math.abs(calibrationFluidViscosity - averageViscosity)

    let denominator = Math.abs((calibrationFluidViscosity / 2) + (averageViscosity / 2));
    
    // denominator = Math.abs(denominator);

    let percentageDifference = (numerator / denominator) * 100;
    let precisePercentageDifference = percentageDifference.toFixed(2);

    $('#calibration-percentage-difference-label').css('display', 'block');
    $('#calibration-percentage-difference').text(precisePercentageDifference);
    $('#calibration-percentage-difference-units').css('display', 'inline');

    $('#calibration-details').html(`Percentage difference = ${percentageDifference}%`);

    // percentage difference checker

    if(percentageDifference <= toleranceBand) {
        $('#calibration-output').html(`<i class="fas fa-check"></i><span>The viscometer passes the calibration check</span>`);
    }
    else if(percentageDifference > toleranceBand) {
        $('#calibration-output').html(`<i class="fas fa-xmark"></i><span>The viscometer fails the calibration check</span>`);
    }

    $('#calibration-details-header').css('visibility', 'visible');
    $('#calibration-details-button').css('visibility', 'visible');

    $('#calibration-details-button').on('click', function(){
        $('#calibration-details').css('visibility', 'visible')
    })
}