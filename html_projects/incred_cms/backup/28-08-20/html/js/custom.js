$(document).ready(function() {
  /*login*/
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


  /*show photo after upload*/
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
            $('#upload_img1').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#gig_upload1").change(function(){
      readURL1(this);
  });


  function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#upload_img2').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#gig_upload2").change(function(){
      readURL2(this);
  });

  function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#upload_img3').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#gig_upload3").change(function(){
      readURL3(this);
  });
  function readURL4(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#upload_img4').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#gig_upload4").change(function(){
      readURL4(this);
  });
  function readURL5(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#upload_img5').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#gig_upload5").change(function(){
      readURL5(this);
  });


  /*show file name after upload*/
  $('#gig_upload_f').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#gig_upload_f')[0].files[0].name;
    $(this).next('span.img').text(file);
  }); 


  $(".catg_list .categry ul li").click(function(e) {
    $(this).addClass('active');
    var $parent = $(this).siblings('li');
    $parent.removeClass("active");
    e.preventDefault();
  });

  $(".create_net .v_l ul li").click(function(e) {
    $(this).addClass('active');
    var $parent = $(this).siblings('li');
    $parent.removeClass("active");
    e.preventDefault();
  });

  $(".sort_cat_bx .box ul li").click(function(e) {
    $(this).addClass('active');
    var $parent = $(this).siblings('li');
    $parent.removeClass("active");
    e.preventDefault();
  });
	
});

/*modal show another model above a modal*/
$(function() {
  return $(".modal").on("show.bs.modal", function() {
    var curModal;
    curModal = this;
    $(".modal").each(function() {
      if (this !== curModal) {
        $(this).modal("hide");
      }
    });
  });
});

/*on scroll add class in header*/
$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $("body").addClass("headerfix");
  } else {  
    $("body").removeClass("headerfix");
  }
});

/*datepicker*/
$( function() {
	$( "#datepicker, #datepicker1, #datepicker2, #datepicker3,  #datepicker4,  #datepicker5, #datepicker6, #datepicker7, #datepicker8, #datepicker9, #datepicker10, #datepicker11, #datepicker12, #datepicker13, #datepicker14, #datepicker15" ).datepicker();
});


/*datetimepicker*/
$(function () {
  $('#datetimepicker1').datetimepicker();
});


