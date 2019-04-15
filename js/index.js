$(function() {
    var width = $(window).width();
    var height = $(window).height();

    $(window).resize(function() {
        height = $(window).height();
        $(".menu-mobile").css(`height:${height} !important`)
    })

    $("ul.list-menu-mobile > li").click(function(){
        $(this).children(".sub-menu-mobile").toggleClass("view"); //this when click is li .children to select sub-menu-mobile
    })

    $(".menu-bar .category").click(function() {
        $(".menu-mobile").addClass("view-menu");
    })
    $(".menu-mobile .close-menu-mobile").click(function() {
        $(".menu-mobile").removeClass("view-menu");
    })
    //end_responsive_mobile

    //menu-service header open -close
    $(".header .service .menu-service").click(function() {
        $(".header .service .list-menu").toggleClass("hidden-md");
    }) //error toggle => click
    
    //end responsive header
    
    //responsive menu-panel
    if (width < 767) $(".menu-bar .category span").text("Menu");
    $(window).resize(function() {
        width = $(window).width();
        if (width < 767) {
            $(".menu-bar .category span").text("Menu"); //change text
        } else {
            $(".menu-bar .category span").text("Danh mục sản phẩm"); //change text
        }
    })
    //responsive footer
    $(".footer .list-infor .col-md-3 > div").click(function(event) {
        let id = event.currentTarget.id; //id of div when click
        $("#"+id+"> ul").toggleClass("hidden-md");
        $("#"+id+"> h4").toggleClass("none-border");
    })
    //end responsive footer

})