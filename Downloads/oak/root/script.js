3$(document).ready( function(){
  console.log('sipsupsupsu');

    $('#click').click( function(event){
        
        event.stopPropagation();
        
        $('#dropDown').toggle();
        
    });
    
    $(document).click( function(){

        $('#dropDown').hide();

    });

});


