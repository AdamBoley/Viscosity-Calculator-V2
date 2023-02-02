// This file is designed to replace the ubbelohde viscometer calculations of scripts-determinability.js
// It aims to replicate all of the Vanilla JavaScript in that file with jQuery
// It uses inline approach, where as many functions as possible are anonymous, and are declared inside the click event listeners
// Therefore, the individual functions that make up chains in the original file have been condensed down

import { determinability } from "./determinability-calculations.js"

$( document ).ready(function(){

    console.log("suspended ready")

    $('#submit-ubbelohde').on('click', function(){
        let select = $('#sample-type-determinability').find(":selected").val()
        let runTime1 = $('#run-time-1').val()
        let runTime2 = $('#run-time-2').val()
        let constant = $('select#constant-input').val()

        if(select === 'disabled') {
            alert('Please select a sample type from the drop-down menu');
        }
        else if(runTime1 === '' || runTime2 === '') {
            alert('Please enter two run-times');
        }
        else if(constant === 'disabled') {
            alert('Please enter a viscometer constant');
        }
        else {
            // no need to parseFloat() here, the .val() method above grabs that

            //This is where calculateUbbelohde function would be called in Vanilla JS
    
            var kv1 = runTime1 * constant;
            var kv2 = runTime2 * constant;
            let preciseKv1 = kv1.toPrecision(4);
            let preciseKv2 = kv2.toPrecision(4);

            // dataSuspended['kv1'] = kv1

            $('#determinability-results').show();
            $('#determinability-kv-1-label').show();
            $('#determinability-kv-2-label').show();
            $('#determinability-kv-1').text(preciseKv1);
            $('#determinability-kv-2').text(preciseKv2);
            $('#determinability-kv-1-units').show();
            $('#determinability-kv-2-units').show();

            $('#determinability-details').append(`
            <p>Kinematic viscosity 1 = ${kv1} cSt</p>
            <p>Kinematic viscosity 2 = ${kv2} cSt</p>`)

            // This is where calculateUbbelohde function would end, and calculateFinalUbbelohde function would begin

            var finalViscosity = ((kv1 + kv2) / 2);
            let preciseFinalViscosity = finalViscosity.toPrecision(4);

            $('#determinability-final-kv-label').show();
            $('#determinability-final-kv').append(preciseFinalViscosity);
            $('#determinability-final-kv-units').show();

            $('#determinability-details').append(`<p>the final calculated viscosity is ${finalViscosity} cSt</p>`)

            // This is where calculateFinalUbbelohde function ends, and the determininability functions begin
            
            determinability(kv1, kv2, finalViscosity)
        }

    })
})