// $(document).ready(function() {
//   $('.table-responsive').on('show.bs.dropdown', function () {
//        $('.table-responsive').css( "overflow", "inherit" );
//   });

//   $('.table-responsive').on('hide.bs.dropdown', function () {
//        $('.table-responsive').css( "overflow", "auto" );
//   });

//   $('[data-toggle="tooltip"]').tooltip();

//   $('#sidebarCollapse').on('click', function () {
//       $('#sidebar').toggleClass('active');
// 	  $('.home_header').toggleClass('active');
//       $('body').toggleClass('sidebar_icon_only');
//   });
  
// 	//pagination
// 	$('#pagination-here').bootpag({
// 		total: 10,          
// 		page: 1,            
// 		maxVisible: 5,     
// 		leaps: true,
// 		href: "#result-page-{{number}}",
// 	})

// 	$('#pagination-here').on("page", function(event, num){
// 		$("#page_l").html("Page " + num); 
// 	});
	
// 	$('textarea.f').keypress(function(){
// 		if(this.value.length > 255){
// 			return false;
// 		}
// 		$("#remainingC").html("Remaining characters : " +(255 - this.value.length));
// 	});
	
// 	$('.edit_btn').on('click', function(){
// 		$(this).parent().parent().parent().parent().addClass('edit_form');
// 	});
// 	$('.btn.updt').on('click', function(){
// 		$(this).parent().parent().parent().parent().parent().parent().removeClass('edit_form');
// 	});
// });

// $(document).ready(function() {
//   $(".add-more").click(function(){ 
// 	  var html = $(".copy").html();
// 	  $(".after-add-more").after(html);
//   });
//   $("body").on("click",".remove",function(){ 
// 	  $(this).parents(".cp").remove();
//   });
// });

// $(function() {
// 	$("#testInput").tags();
// });

$(document).ready(function() {
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
            $('#family_photo').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#fm_photo").change(function(){
      readURL1(this);
  });

  function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#child_photo').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#child_ph").change(function(){
      readURL2(this);
  });

  function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#child_photo1').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#child_ph1").change(function(){
      readURL3(this);
  });

  function readURL4(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#child_photo2').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#child_ph2").change(function(){
      readURL4(this);
  });

  function readURL5(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#child_photo3').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#child_ph3").change(function(){
      readURL5(this);
  });

  function readURL6(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#corp_img').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#corp_photo").change(function(){
      readURL6(this);
  });

  function readURL7(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#corp_img1').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#corp_photo1").change(function(){
      readURL7(this);
  });
  function readURL8(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#corp_img2').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#corp_photo2").change(function(){
      readURL8(this);
  });
  function readURL9(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#corp_img3').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#corp_photo3").change(function(){
      readURL9(this);
  });
  function readURL10(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#corp_img4').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#corp_photo4").change(function(){
      readURL10(this);
  });

  function readURL11(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#corp_img5').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#corp_photo5").change(function(){
      readURL11(this);
  });

  function readURL12(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#nri_img').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#nri_photo").change(function(){
      readURL12(this);
  });

  function readURL13(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#nri_img1').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#nri_photo1").change(function(){
      readURL13(this);
  });

  function readURL14(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#nri_img2').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#nri_photo2").change(function(){
      readURL14(this);
  });

  function readURL15(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#nri_img3').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#nri_photo3").change(function(){
      readURL15(this);
  });

  function readURL16(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#nri_img4').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#nri_photo4").change(function(){
      readURL16(this);
  });

  function readURL17(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#nri_img5').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#nri_photo5").change(function(){
      readURL17(this);
  });



  function readURL18(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#nri_m').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#nri_p").change(function(){
      readURL18(this);
  });
  function readURL19(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#nri_m1').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#nri_p1").change(function(){
      readURL19(this);
  });
  function readURL20(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#nri_m2').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#nri_p2").change(function(){
      readURL20(this);
  });
  function readURL21(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#nri_m3').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#nri_p3").change(function(){
      readURL21(this);
  });
  function readURL22(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#nri_m4').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#nri_p4").change(function(){
      readURL22(this);
  });
  function readURL23(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#nri_m5').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#nri_p5").change(function(){
      readURL23(this);
  });


  function readURL24(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#corp_img6').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#corp_photo6").change(function(){
      readURL24(this);
  });


  function readURL25(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#acad_nomi_img1').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#acad_nomi_photo1").change(function(){
      readURL25(this);
  });


  function readURL26(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#acad_nomi_img2').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#acad_nomi_photo2").change(function(){
      readURL26(this);
  });


  function readURL27(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#acad_nomi_img3').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#acad_nomi_photo3").change(function(){
      readURL27(this);
  });


  function readURL28(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#acad_nomi_img4').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#acad_nomi_photo4").change(function(){
      readURL28(this);
  });


  function readURL29(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#acad_nomi_img5').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#acad_nomi_photo5").change(function(){
      readURL29(this);
  });

  function readURL30(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#ga_img1').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#ga_photo1").change(function(){
      readURL30(this);
  });

  function readURL31(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#ga_img2').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#ga_photo2").change(function(){
      readURL31(this);
  });

  function readURL32(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#ga_img3').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#ga_photo3").change(function(){
      readURL32(this);
  });

  function readURL33(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#ga_img4').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#ga_photo4").change(function(){
      readURL33(this);
  });

  function readURL34(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#ga_img5').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#ga_photo5").change(function(){
      readURL34(this);
  });


  function readURL35(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#upload_img1').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#gig_upload1").change(function(){
      readURL35(this);
  });


  function readURL36(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#upload_img2').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#gig_upload2").change(function(){
      readURL36(this);
  });

  $('#gig_upload_f').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#gig_upload_f')[0].files[0].name;
    $(this).next('span.img').text(file);
  });
  

  

	//start time
	var span = document.getElementById('currenttime');

	function time() {
	  var d = new Date();
	  var s = d.getSeconds();
	  var m = d.getMinutes();
	  var h = d.getHours();
	  span.textContent = h + ":" + m + ":" + s;
	}

	setInterval(time, 1000);


	$('#insct_slider').owlCarousel({
	      loop:false,
	      nav:true,
	      items:4,
	      margin:20,
	      dots:false,
	      mouseDrag: false,
	      navigation:true,
	      navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
	      autoplay:false,
	      smartSpeed: 1500,
	      responsive:{
	          0:{
	              items:4
	          },
	          1000:{
	              items:4
	          }
	      }
	});
	$('#gym_slider, #gym_slider1, #gym_slider2, #gym_slider3, #gym_slider4, #gym_slider5').owlCarousel({
	      loop:false,
	      nav:true,
	      items:6,
	      margin:20,
	      dots:false,
	      mouseDrag: false,
	      navigation:true,
	      navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
	      autoplay:false,
	      smartSpeed: 1500,
	      responsive:{
	          0:{
	              items:6
	          },
	          1000:{
	              items:6
	          }
	      }
	});

	$(".manage_trnr_tabs a.addmore").click(function() {
		$(".manage_trnr_tabs .inputbox.addmangtrnr").toggleClass("active");
	});

	$(".static_tabs a.addmore").click(function() {
		$(".static_tabs .inputbox.addmangtrnr").toggleClass("active");
	});


	$("#addrow").click(function () { 
	    $("#editmenutable").each(function () {
	       
	        var tds = '<tr>';
	        jQuery.each($('tr:last td', this), function () {
	            tds += '<td>' + $(this).html() + '</td>';
	        });
	        tds += '</tr>';
	        if ($('tbody', this).length > 0) {
	            $('tbody', this).append(tds);
	        } else {
	            $(this).append(tds);
	        }
	    });
	});
	$("#addrow1").click(function () { 
	    $("#editmenutable1").each(function () {
	       
	        var tds = '<tr>';
	        jQuery.each($('tr:last td', this), function () {
	            tds += '<td>' + $(this).html() + '</td>';
	        });
	        tds += '</tr>';
	        if ($('tbody', this).length > 0) {
	            $('tbody', this).append(tds);
	        } else {
	            $(this).append(tds);
	        }
	    });
	});
	$("#addrow2").click(function () { 
	    $("#editmenutable2").each(function () {
	       
	        var tds = '<tr>';
	        jQuery.each($('tr:last td', this), function () {
	            tds += '<td>' + $(this).html() + '</td>';
	        });
	        tds += '</tr>';
	        if ($('tbody', this).length > 0) {
	            $('tbody', this).append(tds);
	        } else {
	            $(this).append(tds);
	        }
	    });
	});
	$("#addrow3").click(function () { 
	    $("#editmenutable3").each(function () {
	       
	        var tds = '<tr>';
	        jQuery.each($('tr:last td', this), function () {
	            tds += '<td>' + $(this).html() + '</td>';
	        });
	        tds += '</tr>';
	        if ($('tbody', this).length > 0) {
	            $('tbody', this).append(tds);
	        } else {
	            $(this).append(tds);
	        }
	    });
	});
	$("#addrow4").click(function () { 
	    $("#editmenutable4").each(function () {
	       
	        var tds = '<tr>';
	        jQuery.each($('tr:last td', this), function () {
	            tds += '<td>' + $(this).html() + '</td>';
	        });
	        tds += '</tr>';
	        if ($('tbody', this).length > 0) {
	            $('tbody', this).append(tds);
	        } else {
	            $(this).append(tds);
	        }
	    });
	});


  $(".checkinbox .tbq_rooms button").click(function() {
    $(this).toggleClass('active');
  });
  $('.noguest .btn_list li button').click(function() {
    $(this).toggleClass('active');
  });
});


window.onload = setInterval(clock,1000);
function clock()
{
    var d = new Date();
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDay();
    var dayArr = ["Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    day = dayArr[day];
    var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    month = monthArr[month];
    document.getElementById("currentdate").innerHTML= day +"<br>"+month+" "+date+", "+year;
}

$( document ).ready(function() {
  $("#push_slider").owlCarousel({
    items: 3,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    rewind: true,
    autoplay: true,
    autoplayHoverPause: true,
	animateOut: 'slideOutUp',
	animateIn: 'slideInUp',
    margin: 0,
    nav: true
  });
});

function addToList() {
  let food = document.getElementById("food").value;

  let li = document.createElement("li");
  li.textContent = food;
  li.className = 'btn btn_default'
  li.innerHTML = food + '<i class="fas fa-check"></i>'
  document.getElementById("foodlist").appendChild(li);
}

function addToList1() {
  let food = document.getElementById("editmenuaddmore").value;

  let li = document.createElement("li");
  li.textContent = food;
  li.className = 'btn btn_default'
  li.innerHTML = food + '<i class="fas fa-check"></i>'
  document.getElementById("editlist").appendChild(li);
}

function addToList2() {
  let food = document.getElementById("stataddmore").value;

  let li = document.createElement("li");
  li.textContent = food;
  li.className = 'btn btn_default'
  li.innerHTML = food + '<i class="fas fa-check"></i>'
  document.getElementById("stat_l").appendChild(li);
}

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




$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $("body").addClass("headerfix");
  } else {
    $("body").removeClass("headerfix");
  }
});

$( function() {
	$( "#datepicker, #datepicker1, #datepicker2, #datepicker3,  #datepicker4,  #datepicker5, #datepicker6, #datepicker7, #datepicker8, #datepicker9, #datepicker10, #datepicker11, #datepicker12, #datepicker13, #datepicker14, #datepicker15" ).datepicker();
} );

