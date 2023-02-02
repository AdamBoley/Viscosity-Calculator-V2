

export function repeatability(viscosity1, viscosity2, averageViscosity, select){

    let message = '';
    let repeatability;
    let preciseRepeatability;

    switch(true) {
        case select === 'BO40':
            message = '0.0101 x average viscosity, or 1.01%';
            repeatability = averageViscosity * 0.0101;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select === 'BO100':
            message = '0.0085 x average viscosity, or 0.85%';
            repeatability = averageViscosity * 0.0085;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select === 'FO40':
            message = '0.0074 x average viscosity, or 0.74%';
            repeatability = averageViscosity * 0.0074;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select === 'FO100':
            message = '0.0084 x average viscosity, or 0.84%';
            repeatability = averageViscosity * 0.0084;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select === 'FO150' || select === 'KD40':
            message = '0.0056 x average viscosity, or 0.56%';
            repeatability = averageViscosity * 0.0056;
            preciseRepeatability = repeatability.toPrecision(4);
            break;
        
        case select === 'PW100':
            message = '0.0141 x (average viscosity ^ 1.2)';
            repeatability = (averageViscosity ** 1.2) * 0.0141;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select === 'RFO50':
            message = '0.07885 x average viscosity, or 7.88%';
            repeatability = averageViscosity * 0.07885;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select === 'RFO100':
            message = '0.08088 x average viscosity, or 8.08%';
            repeatability = averageViscosity * 0.08088;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select === 'ADD100':
            message = '0.00192 x (average viscosity ^ 1.1)';
            repeatability = (averageViscosity ** 1.1)* 0.00192;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select === 'GO40':
            message = '(average viscosity + 1) x 0.0043';
            repeatability = (averageViscosity + 1) * 0.0043;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select === 'JFM20':
            message = '0.001368 x (average viscosity ^ 1.4)';
            repeatability = (averageViscosity ** 1.4)* 0.001368;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select === 'UFO40':
            message = '0.001005 x (average viscosity ^ 1.4633)';
            repeatability = (averageViscosity ** 1.722) * 0.000233;
            preciseRepeatability = repeatability.toPrecision(4);
            break;

        case select === 'UFO100':
            message = '0.001005 x (average viscosity ^ 1.4633)';
            repeatability = (averageViscosity ** 1.4633) * 0.001005;
            preciseRepeatability = repeatability.toPrecision(4);
            break;
        
        case select === 'CR':
            message = '0.03 x average viscosity, or 3%';
            repeatability = averageViscosity * 0.03;
            preciseRepeatability = repeatability.toPrecision(4);
            break;
    }

    $('#repeatability-equation-label').css('display', 'block');
    $('#repeatability-equation').text(message);
    $('#repeatability-factor-label').css('display', 'block')
    $('#repeatability-factor').text(preciseRepeatability);
    $('#repeatability-factor-units').css('display', 'inline');

    $('#repeatability-details').append(`<p>Repeatability factor = ${repeatability} cSt</p>`);

    //upper limit calculation

    let repeatabilityUpper = averageViscosity + repeatability;
    let preciseRepeatabilityUpper = repeatabilityUpper.toPrecision(4);
    
    $('#repeatability-upper-limit-label').css('display', 'block');
    $('#repeatability-upper-limit').text(preciseRepeatabilityUpper);
    $('#repeatability-upper-limit-units').css('display', 'inline');

    $('#repeatability-details').append(`<p>Upper limit = ${repeatabilityUpper} cSt</p>`);

    //lower limit calculation

    let repeatabilityLower = averageViscosity - repeatability;
    let preciseRepeatabilityLower = repeatabilityLower.toPrecision(4);

    $('#repeatability-lower-limit-label').css('display', 'block');
    $('#repeatability-lower-limit').text(preciseRepeatabilityLower);
    $('#repeatability-lower-limit-units').css('display', 'inline');

    $('#repeatability-details').append(`<p>Lower limit = ${repeatabilityLower} cSt</p>`);

    //checker calculation

    //checks whether supplied viscosities are greater than lower limit and less than upper limit

    if(viscosity1 > repeatabilityLower && viscosity1 < repeatabilityUpper && viscosity2 > repeatabilityLower && viscosity2 < repeatabilityUpper) {
        $('#repeatability-output').html(`<i class="fas fa-check icon"></i><span>Your viscosities are repeatable</span>`);
    }
    else {
        $('#repeatability-output').html(`<i class="fas fa-xmark icon"></i><span>Your viscosities are not repeatable</span>`);
    }

    $('#repeatability-details-button').css('visibility','visible');

    $('#repeatability-details-header').css('visibility','visible');

    // details section

    $('#repeatability-details-button').on('click', function(){
        //displays unrounded values

        $('#repeatability-details').css('visibility', 'visible');
    })

}