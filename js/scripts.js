(function ( $ ) {
 
    $.fn.greenify = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white"
        }, options );
 
        // Greenify the collection based on the settings variable.
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
 
    };
 
}( jQuery ));

$( "#div1" ).greenify({
   // color: "orange"
});

$( "#execute7" ).click(function() {
	$( "#div1" ).greenify({
    color: "orange"
});
});

$('a').click(function(event){
  var rel = $(this).attr('rel');
  if(rel=='Modal') {
	 event.preventDefault();
	 ShowDialog(true);
         
} 
else {
	
	//alert('this is not model');
}
  
});

      $("#btnShowSimple").click(function (event)
      {
         ShowDialog(false);
         event.preventDefault();
      });

      $("#btnShowModal").click(function (event)
      {
         ShowDialog(true);
         event.preventDefault();
      });
	  
	  

      $("#btnClose").click(function (e)
      {
         HideDialog();
         e.preventDefault();
      });

      $("#btnSubmit").click(function (e)
      {
         var brand = $("#brands input:radio:checked").val();
         $("#output").html("<b>Your favorite mobile brand: </b>" + brand);
         HideDialog();
         e.preventDefault();
      });

 

   function ShowDialog(modal)
   {
      $("#overlay").show();
      $("#dialog").fadeIn(300);
	  //event.preventDefault();

      if (modal)
      {
         $("#overlay").unbind("click");
		 
      }
      else
      {
         $("#overlay").click(function (event)
         {
            HideDialog();
			event.preventDefault();
         });
      }
   }
   
   function ShowPop(popup)
   {
	   //alert('sfsfsf');
	  // var htmlstr = "<div><ul><li>some text 1</li></ul></div><div><ul id=list><li>some text 2</li></ul></div>";
// make sure you choose a suitable Id here that won't conflict
$('body').append('<div id="popup" style="display: none;"></div><div class="arrow" ></div>');
     // $('body').append('<div class="arrow" style="display: none;"></div>');
	  
      $("#popup").fadeIn(300);

     
      
   }
   
    function HidePop()
   {
     
      $("#popup").fadeOut(300);
	  $(".arrow").fadeOut(300);
	  
   } 
   
  $('#overlay-pop').on('click', function (event) {
	  event.preventDefault();
	   $("#overlay-pop").hide();
    HidePop();
	$( "#popup" ).empty();
	
}); 




//$('.signup').popover({
//    container: 'body',
//    html: true,
//    placement: 'top'
//}).click(function(e) {
//        e.preventDefault();
//     });


   
   
   $('a').click(function(event){
	    var title = $(this).attr('title');
  var rel = $(this).attr('rel');
  
   var height=$(this).height();
		 var width=$(this).width();
		var x=$(this).position();
		//alert("Top position: " + offset.top + " Left position: " + offset.left);

  if(rel=='pop') {
	 // alert(title);
	   $("#overlay-pop").show();
	ShowPop(true);
	$( "#popup" ).append( "<p>"+title+"</p>" );
		 $("#popup").css({'top' : x.top+height+5, left : x.left-100});
		 $(".arrow").css({'top' : x.top+height-5, left : x.left});
         event.preventDefault();
} 
else {
	
	//alert('this is not model');
}
  
});

 function ShowTooltip(popup)
   {
	   
	    var htmlstr = "<div></div>";
// make sure you choose a suitable Id here that won't conflict
$('body').append('<div id="tooltip" style="display: none;">' + htmlstr + '</div>');
  
      $("#tooltip").fadeIn(300);    
      
   }

 function HideTooltip()
   {
     //$( "#tooltip" ).empty();
      $("#tooltip").fadeOut(300);
	  $( "#tooltip" ).empty();
   }
   
$( 'a' ).hover(function() {


 var title1 = $(this).attr('title');
  var rel = $(this).attr('rel');
  
   var height=$(this).height();
		 var width=$(this).width();
		var y=$(this).position();
		//alert("Top position: " + offset.top + " Left position: " + offset.left);

  if(rel=='tooltip') {
	  //alert('tooltip');
	   //$("#overlay-pop").show();
	   ShowTooltip(true);
	   $( "#tooltip" ).append( '<p  style="color:#fff;">' + title1 + '</p>' );
	   
		 $("#tooltip").css({'top' : y.top+20, left : y.left-100});
		  $(".tarrow").css({'top' : y.top+10, left : y.left});
	
	
        // e.preventDefault();
} 
else {
	
	//alert('this is not model');
}



}, function() {
	
HideTooltip()
}
); 
   
   
   
   
 
   
   
   
   
    
   
    $("#btnShowPop").click(function (e)
      {
		 // var offset = $(this).offset();
		 var height=$(this).height();
		 var width=$(this).width();
		var x=$(this).position();
		//alert("Top position: " + offset.top + " Left position: " + offset.left);
		
    alert("Top position: " + x.top + " Left position: " + x.left);
	
	//$("#popup").css({'background-color' : 'red', 'left' : x.left-200});
         ShowPop(true);
		 
		 $("#popup").css({'top' : x.top+height, left : x.left-100});
		 
         e.preventDefault();
      });

   (function($) {
    $.fn.drags = function(opt) {

        opt = $.extend({handle:"",cursor:"move"}, opt);

        if(opt.handle === "") {
            var $el = this;
        } else {
            var $el = this.find(opt.handle);
        }

        return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
            if(opt.handle === "") {
                var $drag = $(this).addClass('draggable');
            } else {
                var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
            }
            var z_idx = $drag.css('z-index'),
                drg_h = $drag.outerHeight(),
                drg_w = $drag.outerWidth(),
                pos_y = $drag.offset().top + drg_h - e.pageY,
                pos_x = $drag.offset().left + drg_w - e.pageX;
            $drag.css('z-index', 1000).parents().on("mousemove", function(e) {
                $('.draggable').offset({
                    top:e.pageY + pos_y - drg_h,
                    left:e.pageX + pos_x - drg_w
                }).on("mouseup", function() {
                    $(this).removeClass('draggable').css('z-index', z_idx);
                });
            });
            e.preventDefault(); // disable selection
        }).on("mouseup", function() {
            if(opt.handle === "") {
                $(this).removeClass('draggable');
            } else {
                $(this).removeClass('active-handle').parent().removeClass('draggable');
            }
        });

    }
})(jQuery);

$('#dialog').drags();

   function HideDialog()
   {
      $("#overlay").hide();
      $("#dialog").fadeOut(300);

   } 

	

(function($) {

  var allPanels = $('.accordion > dd').hide();

  $('.accordion > dt > a').click(function() {
      $this = $(this);
      $target =  $this.parent().next();

      if(!$target.hasClass('active')){
         allPanels.removeClass('active').slideUp();
         $target.addClass('active').slideDown();
      }

    return false;
  });

})(jQuery);
   
$.fn.scrollToPoint = function () {
	
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}

$('a').click(function (event) {
	 var scrollposition = $(this).attr('href');
  var rel = $(this).attr('rel');
 
  event.preventDefault();
  $(scrollposition).scrollToPoint();
});   
   
 	
//slider
// settings
var $slider = $('.slider'); // class or id of carousel slider
var $slide = 'li'; // could also use 'img' if you're not using a ul
var $transition_time = 1000; // 1 second
var $time_between_slides = 4000; // 4 seconds

function slides(){
  return $slider.find($slide);
}

slides().fadeOut();

// set active classes
slides().first().addClass('active');
slides().first().fadeIn($transition_time).fadeIn($transition_time);

$("#next-slider").click(function () {

if ($('.slider li:last-child').hasClass('active')) {
	
	jQuery('.slider li:first-child').addClass('active').css("display", "list-item");
	jQuery('li.active').nextAll('li').removeClass('active').css("display", "none"); 
    }
else{
jQuery('li.active').next('li').addClass('active').css("display", "list-item");

jQuery('li.active').prevAll('li').removeClass('active').css("display", "none"); 
}
// slides().next().addClass('active');
// slides().next().fadeIn($transition_time).fadeIn($transition_time);  
});
$("#prev-slider").click(function () {

if ($('.slider li:first-child').hasClass('active')) {
	
	jQuery('.slider li:last-child').addClass('active').css("display", "list-item");
	jQuery('li.active').prevAll('li').removeClass('active').css("display", "none"); 
	
    }
else{
jQuery('li.active').prev('li').addClass('active').css("display", "list-item");

jQuery('li.active').nextAll('li').removeClass('active').css("display", "none"); 

}
// slides().next().addClass('active');
// slides().next().fadeIn($transition_time).fadeIn($transition_time);  
});

// auto scroll 
$interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();
    
      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);
    
      if (slides().length == $i + 1) $i = -1; // loop to start
    
      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides 
);


// carasel code


var n = $(".carousel-slide-wrap").length,
        width = 680,
        newwidth = width * n;

    $('.carouselex-wrap').css({
        'width': newwidth
    });

    $(".carousel-slide-wrap").each(function (i) {
        var thiswid = 110;
        $(this).css({
            'left': thiswid * i
        });

    });
    /*on scroll move the indicator 'shown' class to the
    most visible slide on viewport
    */
    $('.carousel-wrap').scroll(function () {
        var scrollLeft = $(this).scrollLeft();
        $(".carousel-slide-wrap").each(function (i) {
            var posLeft = $(this).position().left
            var w = $(this).width();
           
            if (scrollLeft >= posLeft && scrollLeft < posLeft + w) {
              $(this).addClass('shown').siblings().removeClass('shown');
            }
        });
    });
    /* on left button click scroll to the previous sibling of the current visible slide */
    $('#carousel-left').click(function () {
        var $prev = $('.carouselex-wrap .shown').prev();

        if ($prev.length) {
            $('.carousel-wrap').animate({
                scrollLeft: $prev.position().left
            }, 'slow');
        }
    });
    /* on right button click scroll to the next sibling of the current visible slide */
    $('#carousel-right').click(function () {
        var $next = $('.carouselex-wrap .shown').next();

        if ($next.length) {
            $('.carousel-wrap').animate({
                scrollLeft: $next.position().left
            }, 'slow');
        }
    });





