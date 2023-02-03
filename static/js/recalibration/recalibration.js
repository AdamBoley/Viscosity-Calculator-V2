//recalibration calculation

import { recalibration } from "./recalibration-calculations.js";

$( document ).ready(function(){
    $('#submit-recalibration').on('click', function(){

        let constant = $('#recalibration-constant').val();
        let testingGravity = $('#testing-lab-gravity').val();
        let standardisationGravity = $('#standardisation-lab-gravity').val();

        if(constant === '') {
            alert('Please enter a viscometer constant');
        }
        else if(testingGravity === '') {
            alert('Please enter the gravity at the testing laboratory');
        }
        else if(standardisationGravity === '') {
            alert('Please enter the gravity at the standardisation laboratory');
        }
        else {
            let numerator = Math.abs(testingGravity - standardisationGravity);
    
            let denominator = (testingGravity / 2) + (standardisationGravity / 2);
    
            let percentageDifference = (numerator / denominator) * 100;
            let precisePercentageDifference = percentageDifference.toPrecision(4);
    
            $('#recalibration-percentage-difference-label').css('display', 'block');
            $('#recalibration-percentage-difference').text(precisePercentageDifference);
            $('#recalibration-percentage-difference-units').css('display', 'inline');
    
            recalibration(percentageDifference, testingGravity, standardisationGravity, constant);
        }
    })
})