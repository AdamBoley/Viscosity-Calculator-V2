// repeatability calculations

import { repeatability } from "./repeatability-calculations.js";

$( document ).ready(function(){

    console.log('repeatability ready')

    $('#submit-repeatability').on('click', function(){

        let select = $('#sample-type-repeatability').find(':selected').val();
        let viscosity1 = $('#viscosity-repeatability-1').val();
        let viscosity2 = $('#viscosity-repeatability-2').val();

        console.log(select)
        console.log(viscosity1)
        console.log(viscosity2)

        if(select === 'disabled') {
            alert('Please select a sample type from the drop-down menu');
            console.log('alert triggered')
        }
        else if(viscosity1 === '' || viscosity2 === '') {
            alert('Please enter two viscosity values');
            console.log('alert triggered')
        }
        else {
    
            let averageViscosity = ((viscosity1 / 2) + (viscosity2 / 2))
            console.log(averageViscosity)
            console.log(typeof averageViscosity)
            let preciseAverageViscosity = (averageViscosity.toPrecision(4));
            console.log(preciseAverageViscosity)
            console.log(typeof preciseAverageViscosity)
    
            $('#repeatability-details').append(`<p>Average viscosity = ${averageViscosity} cSt</p>`);

            $('#repeatability-average-viscosity-label').css('display', 'block');
            $('#repeatability-average-viscosity').text(preciseAverageViscosity);
            $('#repeatability-average-viscosity-units').css('display', 'inline');

            repeatability(viscosity1, viscosity2, averageViscosity, select)
        }
    })
})