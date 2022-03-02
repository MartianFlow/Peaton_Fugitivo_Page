$(document).ready(function(){
    $('#main-nav').click(function(){
        if($('.main-nav i').attr('class') == 'fa fa-bars'){
            $('.main-nav i').removeClass('fa fa-bars').addClass('fa fa-close').css({'color':'#797979'})
            $('.navigation').css({'left':'0'})
            $('.main-nav').css({'box-shadow':' 0px 0px 0px #797979'})
            
            $("#fa-icon").hover(function(){
                $("#fa-icon").css("color","#fcbf16");
                $("#fa-icon").css("cursor","pointer");
            }, function(){
                $("#fa-icon").css("color","#797979");
            })
        }else{
            $('.main-nav i').removeClass('fa fa-close').addClass('fa fa-bars')
            $('.navigation').css({'left':'-100%'})
            $('.main-nav').css({'box-shadow':' 0px 0px 15px #797979'})

            $("#fa-icon").hover(function(){
                $("#fa-icon").css("color","#fcbf16");
            }, function(){
                $("#fa-icon").css("color","#797979");
            })
        }
    })
    $(window).on('scroll', function(){
        if($(window).scrollTop() >= $('.section-title').offset().top) {
            $('.section-title div').addClass('black');
            $('#section-title h1').addClass('title');
        }else {
            $('.section-title div').removeAttr('class');
        }
    })

})