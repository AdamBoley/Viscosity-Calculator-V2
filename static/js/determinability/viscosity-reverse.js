// This file is designed to replace the zeitfuchs viscometer calculations of scripts-determinability.js
// It aims to replicate all of the Vanilla JavaScript in that file with jQuery
// It uses inline approach, where as many functions as possible are anonymous, and are declared inside the click event listeners
// Therefore, the individual functions that make up chains in the original file have been condensed down

$(document).ready(function(){
    console.log("reverse ready")

    $('#submit-reverse').on('click', function(){
        let select = $('#sample-type-determinability').val();
        let runTime1 = $('#run-time-1').val();
        let runTime2 = $('#run-time-2').val();
        let constant1 = $('#constant-1-input').val();
        let constant2 = $('#constant-2-input').val();

        if(select === 'disabled') {
            alert('Please select a sample type from the drop down menu');
        }
        else if(runTime1 === '' || runTime2 === '') {
            alert('Please enter two run-times');
        }
        else if (constant1 === '' || constant2 === '') {
            alert('Please enter two viscometer constants');
        }
        else {
            //This is where calculateZeitfuchs would be called

            let kv1 = runTime1 * constant1;
            let kv2 = runTime2 * constant2;
            let preciseKv1 = kv1.toPrecision(4);
            let preciseKv2 = kv2.toPrecision(4);
    
            $('#determinability-kv-1-label').show();
            $('#determinability-kv-2-label').show();
            $('#determinability-kv-1').text(preciseKv1);
            $('#determinability-kv-2').text(preciseKv2);
            $('#determinability-kv-1-units').show();
            $('#determinability-kv-2-units').show();

            $('#determinability-details').append(`
            <p>Kinematic viscosity 1 is ${kv1} cSt</p>
            <p>Kinematic viscosity 2 is ${kv2} cSt</p>`);

            //This is where calculateZeitfuchs ends, and calculateFinalZeitfuchs begins

            let finalViscosity = ((kv1 + kv2) / 2);
            let preciseFinalViscosity = finalViscosity.toPrecision(4);

            $('#determinability-final-kv-label').show();
            $('#determinability-final-kv').text(preciseFinalViscosity);
            $('#determinability-final-kv-units').show();

            $('#determinability-details').append(`<p>The final calculated viscosity is ${finalViscosity} cSt</p>`);

            //This is where calculateFinalZeitfuchs ends

            // let dataReverse = {
            //     'finalViscosity': finalViscosity,
            //     'kv1': kv1,
            //     'kv2': kv2,
            // }

            // module.exports = {dataReverse}
        }
    })
})