$(document).ready(function(){

    $('#reset-determinability').on('click', function(){

        $('#run-time-1').val('');
        $('#run-time-2').val('');
        $('#run-time-1').focus();
        $('#constant-input').val($('#constant-input option[selected]').val());// resets viscometer dropdown menu to the initial disabled option
        $('#sample-type-determinability').val($('#sample-type-determinability option[selected]').val());

        $('.output-number').text('');
        $('.output-label').css('display', 'none');
        $('.output-unit').css('display', 'none');

        $('#determinability-details-header').css('visibility', 'hidden');
        $('#determinability-details-button').css('visibility', 'hidden');
        $('#determinability-details').css('visibility', 'hidden');
        $('#determinability-details').empty(); // removes all child p elements from determinability-details div

    })
})