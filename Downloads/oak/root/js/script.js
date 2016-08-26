$(document).ready( function(){

    $('#click').click( function(event){
        
        event.stopPropagation();
        
        $('#dropDown').toggle();
        
    });
    
    $(document).click( function(){

        $('#dropDown').hide();

    });

});