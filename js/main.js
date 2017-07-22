$(document).ready(function(){
    $(".navbar-toggle").click(function(){
        $(".zhq-dibu").toggleClass("dingactive");
       
    });
    $('.foot1,.foot2,.foot3,.foot4,.foot5,.foot6,.foot7').on('click', function () {
        $(this).find('.jiahao').toggleClass('xuanzhuan');
        $(this).find('.shop').toggleClass('bianda');
        $(this).find('ul').slideToggle();
    })

    // $(".navbar-toggle").click(function(){
    //     $(".collapse-zhq").toggleClass("active");
    // });
    $('.flexslider').flexslider({
        animation: "slide",
    });
    $('.flexslider2').flexslider({
        direction: "vertical",
        animation: "slide"
    });
});
// 修改