import { dataSuspended } from "./viscosity-suspended.js"

// The above imports the dataSuspended object

$(document).ready(function(){
    console.log('determinability ready')

    console.log(dataSuspended.kv1)
    //This logs out the default value of the dataSuspended object
    
    $('#determinability').on('click', function(){
        console.log(dataSuspended.kv1)
        //This logs out the updated value of the dataSuspended object
    })
})

