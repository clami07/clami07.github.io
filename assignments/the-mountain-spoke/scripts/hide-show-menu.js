$(function(){
		// All jQuery code goes here
        $('.bikeOptions h4').click(function(){
            // Hiding all open accordian
            
     $(this).parent().parent().find('ul').slideUp();
            //looking if any ul is not open then slide down accordian
            
    if(!$(this).next().is(":visible")){
        $(this).next().slideDown();
    }
	});
});