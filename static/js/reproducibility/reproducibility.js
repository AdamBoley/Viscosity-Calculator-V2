// reproducibility calculations

import { reproducibility } from "./reproducibility-calculations.js"

$( document ).ready(function(){

    console.log('reproducibility ready')

    $('#submit-reproducibility').on('click', function(){

        let select = $('#sample-type-reproducibility').find(':selected').val();
        let viscosity1 = $('#viscosity-reproducibility-1').val();
        let viscosity2 = $('#viscosity-reproducibility-2').val();

        if(select === 'disabled') {
            alert('Please select a sample type from the drop-down menu');
        }
        else if(viscosity1 === '' || viscosity2 === '') {
            alert ('Please enter two viscosities');
        } 
        else {

            let averageViscosity = ((viscosity1 / 2) + (viscosity2 / 2));
            let preciseAverageViscosity = averageViscosity.toPrecision(4);

            $('#reproducibility-details').append(`<p>Average viscosity = ${averageViscosity} cSt</p>`);

            $('#reproducibility-average-viscosity-label').css('display', 'block');
            $('#reproducibility-average-viscosity').text(preciseAverageViscosity);
            $('#reproducibility-average-viscosity-units').css('display', 'inline');

            reproducibility(viscosity1, viscosity2, averageViscosity, select);
        }

    })

})