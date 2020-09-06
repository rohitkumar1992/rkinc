$(document).ready(function() {
  /*login*/
	$(".login_ar form .inputbox .fld_mbl, input[type='email']").keyup(function() {
		$(this).addClass('active');
	});
  $(".fields.email input.otp_fld, .fields.phone input.otp_fld").keyup(function() {
    $('.login_ar form .bottom_ar button.sendotp').removeClass('active');
    $('.login_ar form .bottom_ar button.valotp').addClass('active');
    $('.login_ar form .bottom_ar p.r_otp').addClass('active');
  });
	$(".login_ar form .bottom_ar a.login_email").click(function() {
		$('.login_ar form .bottom_ar button.valotp').removeClass('active');
    $('.login_ar form .bottom_ar button.sendotp').addClass('active');
    $('.login_ar form .bottom_ar p.r_otp').removeClass('active');
	});
  $(".login_ar form .bottom_ar a.login_phone").click(function() {
   $('.login_ar form .bottom_ar button.valotp').removeClass('active');
    $('.login_ar form .bottom_ar button.sendotp ').addClass('active');
    $('.login_ar form .bottom_ar p.r_otp').removeClass('active');
  });
	$("a.login_email").click(function() {
		$(".fields.phone").removeClass('active');
		$(".fields.email").addClass('active');
		$("a.login_phone").show();
		$(this).hide();
	});
	$("a.login_phone").click(function() {
		$(".fields.phone").addClass('active');
		$(".fields.email").removeClass('active');
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


  $('.scrl_icon').click(function() {
    $('.side_btn_l').toggleClass('active');
  });

  // Prevents menu from closing when clicked inside 
  $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
  });


  $("header .top_bar .event_l_p > a").click(function() {
    $("header .top_bar .alllinks").addClass('active');
  });
  $("header .top_bar .alllinks .close").click(function() {
    $('header .top_bar .alllinks').removeClass('active');
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


$(document).ready(function () {

    $(".inner_wrap").scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $(".inner_wrap").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});


