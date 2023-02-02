$( document ).ready(function() {
    //resets calculation article

    $('#reproducibility-reset').on('click', function(){

        //resets inputs
        $('#viscosity-reproducibility-1').val('');
        $('#viscosity-reproducibility-2').val('');
        $('#sample-type-reproducibility').val($('#sample-type-reproducibility option[selected]').val())

        $('.output-number').text('');
        $('.output-label').css('display', 'none');
        $('.output-unit').css('display', 'none');
        
        //resets details button, header and body
        $('#reproducibility-details-button').css('visibility', 'hidden');
        $('#reproducibility-details').css('visibility', 'hidden');
        $('#reproducibility-details-header').css('visibility', 'hidden');
        $('#reproducibility-details').empty(); // removes all child p elements from determinability-details div

    })
})