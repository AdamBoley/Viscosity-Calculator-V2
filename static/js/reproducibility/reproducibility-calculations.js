

export function reproducibility(viscosity1, viscosity2, averageViscosity, select){
    //calculates reproducibility factor

    let message = '';
    let reproducibility;
    let preciseReproducibility;

    switch(true) {
        case select === 'BO40':
            message = '0.0136 x average viscosity, or 1.36%';
            reproducibility = averageViscosity * 0.0136;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select === 'BO100':
            message = '0.0190 x average viscosity, or 1.90%';
            reproducibility = averageViscosity * 0.0190;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select === 'FO40':
            message = '0.0122 x average viscosity, or 1.22%';
            reproducibility = averageViscosity * 0.0122;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select === 'FO100':
            message = '0.0138 x average viscosity, or 1.38%';
            reproducibility = averageViscosity * 0.0138;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select === 'FO150':
            message = '0.018 x average viscosity, or 1.8%';
            reproducibility = averageViscosity * 0.018;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;
        
        case select === 'PW100':
            message = '0.0366 x (average viscosity ^ 1.2)';
            reproducibility = (averageViscosity ** 1.2) * 0.0366;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select === 'RFO50':
            message = '0.08461 x average viscosity, or 8.46%';
            reproducibility = averageViscosity * 0.08461;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select === 'RFO100':
            message = '0.1206 x average viscosity, or 12.06%';
            reproducibility = averageViscosity * 0.1206;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select === 'ADD100':
            message = '0.00862 x (average viscosity ^ 1.1)';
            reproducibility = (averageViscosity ** 1.1)* 0.00862;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select === 'GO40':
            message = '0.0082 x (average viscosity + 1)';
            reproducibility = (averageViscosity + 1) * 0.0082;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select === 'JFM20':
            message = '0.002899 x (average viscosity ^ 1.4)';
            reproducibility = (averageViscosity ** 1.4)* 0.002899;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select === 'KD40':
            message = '0.0224 x average viscosity, or 2.24%';
            reproducibility = averageViscosity * 0.0224;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select === 'UFO40':
            message = '0.000594 x (average viscosity ^ 1.722)';
            reproducibility = (averageViscosity ** 1.722) * 0.000594;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;

        case select === 'UFO100':
            message = '0.003361 x (average viscosity ^ 1.4633)';
            reproducibility = (averageViscosity ** 1.4633) * 0.003361;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;
        
        case select === 'CR':
            message = '0.03 x average viscosity, or 3%';
            reproducibility = averageViscosity * 0.03;
            preciseReproducibility = reproducibility.toPrecision(4);
            break;
    }

    $('#reproducibility-equation-label').css('display', 'block');
    $('#reproducibility-equation').text(message);
    $('#reproducibility-factor-label').css('display', 'block');
    $('#reproducibility-factor').text(preciseReproducibility);
    $('#reproducibility-factor-units').css('display', 'inline');

    $('#reproducibility-details').append(`<p>Reproducibility factor = ${reproducibility} cSt</p>`);

    let reproducibilityUpper = averageViscosity + reproducibility;
    let precisereproducibilityUpper = reproducibilityUpper.toPrecision(4);
    $('#reproducibility-upper-limit-label').css('display', 'block');
    $('#reproducibility-upper-limit').text(precisereproducibilityUpper);
    $('#reproducibility-upper-limit-units').css('display', 'inline');

    $('#reproducibility-details').append(`<p>Upper limit = ${reproducibilityUpper} cSt</p>`);

    let reproducibilityLower = averageViscosity - reproducibility;
    let precisereproducibilityLower = reproducibilityLower.toPrecision(4);

    $('#reproducibility-lower-limit-label').css('display', 'block');
    $('#reproducibility-lower-limit').text(precisereproducibilityLower);
    $('#reproducibility-lower-limit-units').css('display', 'inline');

    $('#reproducibility-details').append(`<p>Lower limit = ${reproducibilityLower} cSt</p>`);

    //checks whether supplied viscosities are greater than lower limit and less than upper limit

    if(viscosity1 > reproducibilityLower && viscosity1 < reproducibilityUpper && viscosity2 > reproducibilityLower && viscosity2 < reproducibilityUpper) {
        $('#reproducibility-output').html(`<i class="fas fa-check icon"></i><span>Your viscosities are repeatable</span>`);
    }
    else {
        $('#reproducibility-output').html(`<i class="fas fa-xmark icon"></i><span>Your viscosities are not repeatable</span>`);
    }

    $('#reproducibility-details-button').css('visibility', 'visible');

    $('#reproducibility-details-header').css('visibility', 'visible');

    $('#reproducibility-details-button').on('click', function(){

        $('#reproducibility-details').css('visibility', 'visible');
    })
}