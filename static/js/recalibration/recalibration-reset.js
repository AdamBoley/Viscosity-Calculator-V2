

//recalibration calculations

$( document ).ready(function(){
    $('#recalibration-reset').on('click', function(){
        $('#recalibration-constant').val('');
        $('#testing-lab-gravity').val('');
        $('#standardisation-lab-gravity').val('');
        $('#recalibration-constant').focus();
        
        $('.output-label').css('display', 'none');
        $('.output-number').css('display', 'none');
        $('.output-unit').css('display', 'none');
        $('#recalibration-percentage-difference').text('');
        $('#recalibration-new-constant').text('');

    })
})