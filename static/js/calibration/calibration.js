// calibration calculations

import { calibration } from "./calibration-calculation.js";

$( document ).ready(function(){

    $('#submit-calibration').on('click', function(){

        let runTime1 = $('#calibration-run-time-1').val();
        let runTime2 = $('#calibration-run-time-2').val();
        let constant = $('#calibration-constant-input').val();
        let calibrationFluidViscosity = $('#calibration-fluid-viscosity').val();

        if(runTime1 === '' || runTime2 === '') {
            alert('Please enter two run-times');
        }
        else if (constant === 'disabled') {
            alert('Please enter a constant');
        }
        else if (calibrationFluidViscosity === '') {
            alert('Please enter a calibration fluid viscosity');
        }
        else {
    
            calibration(runTime1, runTime2, constant, calibrationFluidViscosity);
        }
    })
})