/* ============================================================
 * Plugin Core Init
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */
$(document).ready(function() {
	'use strict';
    $('#contact-form').validate({
        // Override to submit the form via ajax
        submitHandler: function(form) {
            $('#contact-panel').portlet({
				refresh:true
			});
            $.ajax({
			     type:$(form).attr('method'),
			     url: $(form).attr('action'),
			     data: $(form).serialize(),
			     dataType: 'json',
			     success: function(data){
			     	console.log(data);
			       //Set your Succss Message
			       clearForm("Ačiū! Jūsų registracija patvirtinta.");
			     },
			     error: function(err){
		            $('#contact-panel').portlet({
						refresh:false,
						//Set your ERROR Message
						error:"Jūsų registracijos negalėjome priimti, bandykite dar kartą."
					});
			     }
		    });
		    return false; // required to block normal submit since you used ajax
        }
    });
    function clearForm(msg){
    	$('#contact-panel').html('<div class="alert alert-success" role="alert">'+msg+'</div>');
    }

    $('#contact-panel').portlet({
        onRefresh: function() {
        }
    });
});
