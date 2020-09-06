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

// $(document).ready(function(){
//   $('#carousel').flexslider({
//     animation: "slide",
//     controlNav: false,
//     animationLoop: true,
//     slideshow: false,
//     direction: "vertical",
//     minItems: 4,
//     maxItems: 4, 
//     asNavFor: '#slider'
//   });

//   $('#slider').flexslider({
//     animation: "slide",
//     controlNav: false,
//     animationLoop: true,
//     slideshow: false,
//     minItems: 1,
//     maxItems: 1,
//     sync: "#carousel",
//     start: function(slider){
//       $('body').removeClass('loading');
//     }
//   });
// });

$(document).ready(function(){
  // $("#editGallery").click(function(){
  //   $(".edit-btns, .i_close").toggle();
  // });

  $(".ticker_post .post_list li .bx .comments p a.cm_link").click(function(e) {
    $('.ticker_post .post_list li .bx .cmnt_box').removeClass('active');
    var $parent = $(this).parent().parent().parent().siblings('.cmnt_box');
    $parent.addClass("active");
    e.preventDefault();
  });
  $(".ticker_post .post_list li .bx .cmnt_box .close").click(function() {
    $(this).parent().removeClass("active");
  });

  $(".ticker_post .post_list li .bx .likes p a.lk_link").click(function(b) {
    $('.ticker_post .post_list li .bx .like_box').removeClass('active');
    var $parent1 = $(this).parent().parent().parent().siblings('.like_box');
    $parent1.addClass("active");
    b.preventDefault();
  });
  $(".ticker_post .post_list li .bx .like_box .close").click(function() {
    $(this).parent().removeClass("active");
  });

  $('.ticker_ar .searchbox .field button.btn_drop').click(function() {
    $('.ticker_post .ticker_cat').toggleClass('active')
    $(this).toggleClass('active');
  });

  // $(".ticker_post .post_list li .bx .name_btch.l .live_btn").click(function() {
  //   $(this).toggleClass("live");
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