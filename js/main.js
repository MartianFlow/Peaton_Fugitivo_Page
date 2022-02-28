$(document).ready(function(){
    $('#main-nav').click(function(){
        if($('.main-nav i').attr('class') == 'fa fa-bars'){
            $('.main-nav i').removeClass('fa fa-bars').addClass('fa fa-close').css({'color':'#FFFFFF'})
            $('.navigation').css({'left':'0'})
        }else{
            $('.main-nav i').removeClass('fa fa-close').addClass('fa fa-bars')
            $('.navigation').css({'left':'-100%'})
        }
    })

})