$(document).ready(function(){

    $('#reset-determinability').on('click', function(){

        $('#run-time-1').val('');
        $('#run-time-2').val('');
        $('#run-time-1').focus();
        $('#constant-input option:selected').index(); // resets viscometer dropdown menu to the initial disabled option
        $('#sample-type-determinability option:selected').index();

        $('#determinability-kv-1').text('');
        $('#determinability-kv-2').text('');
        $('#determinability-final-kv').text('');
        $('#determinability-equation').text('');
        $('#determinability-factor').text('');
        $('#determinability-upper-limit').text('');
        $('#determinability-lower-limit').text('');
        $('#determinability-output').text('');

        $('#determinability-kv-1-units').hide();
        $('#determinability-kv-2-units').hide();
        $('determinability-final-kv-units').hide();
        $('determinability-factor-units').hide();
        $('determinability-upper-limit-units').hide();
        $('determinability-lower-limit-units').hide();
        $('determinability-details-button').hide();
        $('determinability-details').hide();
        $('determinability-kv-1-label').hide();
        $('determinability-kv-2-label').hide();
        $('determinability-final-kv-label').hide();
        $('determinability-equation-label').hide();
        $('determinability-factor-label').hide();
        $('determinability-upper-limit-label').hide();
        $('determinability-lower-limit-label').hide();
        $('determinability-results').hide();
        $('determinability-details-header').css('visibility', 'hidden');

    })
})