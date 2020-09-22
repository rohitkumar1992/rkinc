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


  /*word limit*/
  $(function(){
    $(".search_ar .serch_sug .sug_list ul li a.box .info p").each(function(i){
      len=$(this).text().length;
      if(len>10)
      {
        $(this).text($(this).text().substr(0,10)+'…');
      }
    });
    $(".cont_ar.nws .tab-pane li .box .info p").each(function(i){
      len=$(this).text().length;
      if(len>100)
      {
        $(this).text($(this).text().substr(0,100)+'…');
      }
    });
  });

  /*search sug*/
  $(".search_ar .searchbox .inputbox input").keyup(function() {
    $(this).closest(".searchbox").siblings(".serch_sug").addClass('active');
  });

  //accordion
  $('.toggle').click(function(e) {
    e.preventDefault();
    let $this = $(this);
    if($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
      $this.removeClass('active');
    }else{
      $this.parent().parent().find('div .contnt').removeClass('show');
      $this.parent().parent().find('div .contnt').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
      $this.toggleClass('active');
    }
  });

  /*input charecter limit*/
  $('input.area').keyup(function() {
    $(this).siblings('.maxl').find('span.word_counter').text(this.value.length+'');
  });
  $('textarea.area').keyup(function() {
    $(this).siblings('.maxl').find('span.word_counter').text(this.value.length+'');
  });

  /*file name*/
  $('#group_img').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#group_img')[0].files[0].name;
    $(this).next('span.img').text(file);
  });
  $('#group_img1').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#group_img1')[0].files[0].name;
    $(this).next('span.img').text(file);
  });
  $('#group_img2').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#group_img2')[0].files[0].name;
    $(this).next('span.img').text(file);
  });


  $('.mel_gal ul li .box > h4 > span').click(function() {
    $(this).parent().siblings('.gal').toggleClass('active');
  });


  $('.vdo_l ul li .box .img span').click(function() {
    $(this).addClass('play_vdo');
    $(this).next('#playvideo')[0].play();
  });


  $('.srch_rm .icon').click(function() {
    $(this).siblings('.rm_srch').addClass('active');
  });
  $('.rm_srch > a').click(function() {
    $(this).parent('.rm_srch').removeClass('active');
  });


  $('.ic_filtr').click(function(){
    var $this = $(this);
    $this.parent('.dir_filtr').toggleClass('active');
    if($this.parent('.dir_filtr').hasClass('active')){
      $this.children('span').text('CLOSE FILTER');     
    } else {
      $this.children('span').text('FILTER');
    }
  });
  $('.contct .addr button.btn').click(function(){
    var $this = $(this);
    $this.parent('.contct .addr').toggleClass('active');
    if($this.parent('.contct .addr').hasClass('active')){
      $this.text('Hide Address');     
    } else {
      $this.text('View Address');
    }
  });

  $('.v_dirct .dir_f_tab .tab-content .lst label').click(function(e) {
      $('.v_dirct .dir_f_tab .tab-content .lst label.active').removeClass('active');
      var $this = $(this);
      $this.addClass('active');
      e.preventDefault();
  });

  $('.dash_prfl form .field ul.tag_lst li').click(function(e) {
      $('.dash_prfl form .field ul.tag_lst li.active').removeClass('active');
      var $this = $(this);
      $this.addClass('active');
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


