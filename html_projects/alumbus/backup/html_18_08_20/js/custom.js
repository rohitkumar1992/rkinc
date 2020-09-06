$(document).ready(function(){
    $("#uploadVideo").click(function(){
      $("#uploadVideoDiv").toggle();
    });
});

$(document).ready(function(){
  $("#pendingApproval").click(function(){
    $("#pendingApprovalList").toggle();
  });
});

$(document).ready(function(){
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: true,
    slideshow: false,
    direction: "vertical",
    minItems: 4,
    maxItems: 4, 
    asNavFor: '#slider'
  });

  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: true,
    slideshow: false,
    minItems: 1,
    maxItems: 1,
    sync: "#carousel",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
});

$(document).ready(function(){
  // $("#editGallery").click(function(){
  //   $(".edit-btns, .i_close").toggle();
  // });

  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#upload_img').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#gig_upload").change(function(){
      readURL(this);
  });

  function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#upload_img2').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#gig_upload2").change(function(){
      readURL1(this);
  });


  function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#upload_img3').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#gig_upload3").change(function(){
      readURL2(this);
  });


  $('#gig_upload1').change(function() {
	  var i = $(this).prev('label').clone();
	  var file = $('#gig_upload1')[0].files[0].name;
	  $(this).next('span.img').text(file);
	});

  // $(function(){
  //     $(".user-manage .card-body p.ttl").text(function(index, currentText) {
  //         return currentText.substr(0, 25) + '...';
  //     });
  // });

  var name = $('.user-manage .card-body p.ttl').text();
	if (name.length > 24) {
	    var shortname = name.substring(0, 25) + " ...";
	    $('.user-manage .card-body p.ttl').replaceWith(shortname);
	}

	var name = $('.user-manage .card-body p.loc span:first-child').text();
	if (name.length > 19) {
	    var shortname = name.substring(0, 20) + " ...";
	    $('.user-manage .card-body p.loc span:first-child').replaceWith(shortname);
	}


	$(".fields.phone button.sendotp").click(function() {
		$(".fields.phone .field.otp").show();
	});
	$("input[type='number'], input[type='email']").keyup(function() {
		$(this).addClass('active');
	});
	$(".fields.email button.sendotp").click(function() {
		$(".fields.email .field.otp").show();
	});
	$("a.login_email").click(function() {
		$(".fields.phone").hide();
		$(".fields.email").show();
		$("a.login_phone").show();
		$(this).hide();
	});
	$("a.login_phone").click(function() {
		$(".fields.phone").show();
		$(".fields.email").hide();
		$("a.login_email").show();
		$(this).hide();
	});
});

$( function() {
  $( "#datepicker, #datepicker1, #datepicker2, #datepicker3,  #datepicker4,  #datepicker5, #datepicker6, #datepicker7, #datepicker8, #datepicker9, #datepicker10, #datepicker11, #datepicker12, #datepicker13, #datepicker14, #datepicker15" ).datepicker();
});