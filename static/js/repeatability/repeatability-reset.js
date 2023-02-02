
$( document ).ready(function(){
    //resets calculation article

    $('#repeatability-reset').on('click', function(){
        //resets inputs
        $('#viscosity-repeatability-1').val('');
        $('#viscosity-repeatability-2').val('');
        $('#sample-type-repeatability').val($('#sample-type-repeatability option[selected]').val())

        //reset outputs
        $('.output-number').text('');
        $('.output-label').css('display', 'none');
        $('.output-unit').css('display', 'none');
        
        //resets details button, header and body
        $('#repeatability-details-button').css('visibility', 'hidden')
        $('#repeatability-details').css('visibility', 'hidden')
        $('#repeatability-details-header').css('visibility', 'hidden')
        $('#repeatability-details').empty(); // removes all child p elements from determinability-details div
    })
})
