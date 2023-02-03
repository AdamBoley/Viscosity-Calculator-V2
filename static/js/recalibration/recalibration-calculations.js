

export function recalibration(percentageDifference, testingGravity, standardisationGravity, constant){

    if(percentageDifference > 0.1) {
        let newConstant = (standardisationGravity / testingGravity) * constant;
        let preciseNewConstant = newConstant.toPrecision(4);
        $('#recalibration-new-constant-label').css('display', 'block');
        $('#recalibration-new-constant').text(preciseNewConstant);
        $('#recalibration-new-constant-units').css('display', 'inline');
    }
    else {
        $('#recalibration-new-constant').text('The difference between the two gravities does not warrant recalibration of the viscometer');
    }
}