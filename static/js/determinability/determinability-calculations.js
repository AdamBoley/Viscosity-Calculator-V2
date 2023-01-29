// import { dataSuspended } from "./viscosity-suspended.js"

// The above imports the dataSuspended object

$( document ).ready(determinability) 

// $(document).ready(function(){
export function determinability(kv1, kv2, finalViscosity){
    console.log('determinability ready')

    // console.log(dataSuspended.kv1)
    //This logs out the default value of the dataSuspended object

    let select = $('#sample-type-determinability').val()
    let message= ''
    let determinability
    let preciseDeterminability

    switch(true) {
        case select === 'BO40'|| select === 'FO40' || select === 'KD40':
            message = '0.0037 x final calculated viscosity, or 0.37%';
            determinability = finalViscosity * 0.0037;
            preciseDeterminability = determinability.toPrecision(4);
            break;
        
        case select === 'BO100' || select === 'FO100':
            message = '0.0036 x Final calculated viscosity, or 0.36%';
            determinability = finalViscosity * 0.0036;
            preciseDeterminability = determinability.toPrecision(4);
            break;

        case select === 'FO150':
            message = '0.0150 x Final calculated viscosity, or 1.5%';
            determinability = finalViscosity * 0.0150;
            preciseDeterminability = determinability.toPrecision(4);
            break;
        
        case select === 'PW100':
            message = '0.0080 x Final calculated viscosity, or 0.80%';
            determinability = finalViscosity * 0.0080;
            preciseDeterminability = determinability.toPrecision(4);
            break;

        case select === 'RFO50':
            message = '0.0244 x Final calculated viscosity, or 2.44%';
            determinability = finalViscosity * 0.0244;
            preciseDeterminability = determinability.toPrecision(4);
            break;

        case select === 'RFO100' || select === 'CR':
            message = '0.03 x Final calculated viscosity, or 3%';
            determinability = finalViscosity * 0.03;
            preciseDeterminability = determinability.toPrecision(4);
            break;

        case select === 'ADD100':
            message = '(Final calculated viscosity ^ 1.1) x 0.00106';
            determinability = (finalViscosity ** 1.1) * 0.00106;
            preciseDeterminability = determinability.toPrecision(4);
            break;

        case select === 'GO40':
            message = '(Final calculated viscosity + 1) x 0.0013';
            determinability = (finalViscosity + 1) * 0.0013;
            preciseDeterminability = determinability.toPrecision(4);
            break;

        case select === 'JFM20':
            message = '0.007608 x Final calculated viscosity, or 0.7608%';
            determinability = finalViscosity * 0.007608;
            preciseDeterminability = determinability.toPrecision(4);
            break;
    }

    $('#determinability-equation-label').show();
    $('#determinability-equation').text(message);
    $('#determinability-factor-label').show();
    $('#determinability-factor').text(preciseDeterminability);
    $('#determinability-factor-units').show();

    $('#determinability-details').append(`<p>The determinability factor is ${determinability} cSt</p>`);

    //This is where the determinability function ends, and the upperLimit function begins

    let upperAllowedViscosity = finalViscosity + determinability;
    let preciseUpperAllowedViscosity = upperAllowedViscosity.toPrecision(4);

    $('#determinability-upper-limit-label').show();
    $('#determinability-upper-limit').text(preciseUpperAllowedViscosity);
    $('#determinability-upper-limit-units').show();

    $('determinability-details').append(`<p>The determinability upper limit is ${finalViscosity} + ${determinability} = ${upperAllowedViscosity} cSt</p>`);

    //This is where the upperLimit function ends, and the lowerLimit function begins

    let lowerAllowedViscosity = finalViscosity - determinability;
    let preciseLowerAllowedViscosity = lowerAllowedViscosity.toPrecision(4);

    $('#determinability-lower-limit-label').show();
    $('#determinability-lower-limit').text(preciseLowerAllowedViscosity);
    $('#determinability-lower-limit-units').show();

    $('#determinability-details').append(`<p>The determinability lower limit ${finalViscosity} - ${determinability} = ${lowerAllowedViscosity} cSt</p>`);

    //This is where lowerLimit ends and checker begins

    if(kv1 > lowerAllowedViscosity && kv1 < upperAllowedViscosity && kv2 > lowerAllowedViscosity && kv2 < upperAllowedViscosity) {
        $('#determinability-output').html(`<i class="fas fa-check"></i><span>Your viscosities are determinable</span>`);
    }

    else {
        $('#determinability-output').html(`<i class="fas fa-xmark"></i><span>Your viscosities are not determinable</span>`);
    }

    $('#determinability-details-button').css('visibility','visible');

    $('#determinability-details-header').css('visibility','visible');

    // This is where checker ends. Below is the code block that displays the detail section

    $('#determinability-details-button').on('click', function(){
        //displays unrounded values

        $('#determinability-details').css('visibility', 'visible');
    })

    $('#determinability').on('click', function(){
        console.log(dataSuspended.kv1)
        //This logs out the updated value of the dataSuspended object
    })
}
// )

