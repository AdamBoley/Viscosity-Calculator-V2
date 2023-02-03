

$('#calibration-reset').on('click', function(){
    //resets calculation article for further use

    //reset inputs
    $('#calibration-run-time-1').val('');
    $('#calibration-run-time-2').val('');
    $('#calibration-fluid-viscosity').val('');
    $('#calibration-constant-input').val($('#calibration-constant-input option[selected]').val());
    $('#calibration-run-time-1').focus();

    $('.output-number').text('');
    $('.output-label').css('display', 'none');
    $('.output-unit').css('display', 'none');

    //reset details
    $('#calibration-details-header').css('visibility', 'hidden');
    $('#calibration-details-button').css('visibility', 'hidden');
    $('#calibration-details').css('visibility', 'hidden');
    $('#calibration-details').empty();
})